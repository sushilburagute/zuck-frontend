import { IDish } from "../types/IDish";
import { ICart } from "../types/ICart";

export type FoodData = {
  allDishes: IDish[];
};

export type FavouritesData = {
  foodFavourites: IDish[];
};

export type CartData = {
  foodCart: ICart[];
};

type StoredCartItem = {
  _id: string;
  quantity: number;
};

type StoredUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  token: string;
};

type LoginPayload = {
  email: string;
  password: string;
  isGuest?: boolean;
};

const STORAGE_KEYS = {
  users: "zuck_users",
  favourites: (token: string) => `zuck_favs_${token}`,
  cart: (token: string) => `zuck_cart_${token}`,
};

let cachedFoodData: FoodData | null = null;

function isBrowser() {
  return typeof window !== "undefined";
}

function readStorage<T>(key: string, fallback: T): T {
  if (!isBrowser()) return fallback;
  const value = localStorage.getItem(key);
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

function writeStorage<T>(key: string, value: T) {
  if (!isBrowser()) return;
  localStorage.setItem(key, JSON.stringify(value));
}

export async function fetchFoodData(): Promise<FoodData> {
  if (cachedFoodData) return cachedFoodData;
  const response = await fetch("/json/food.json");
  if (!response.ok) {
    throw new Error("Unable to load food data.");
  }
  const data = (await response.json()) as FoodData;
  cachedFoodData = data;
  return data;
}

function mapDishIdsToDishes(ids: string[], dishes: IDish[]) {
  const dishMap = new Map(dishes.map((dish) => [dish._id, dish]));
  return ids
    .map((id) => dishMap.get(id))
    .filter((dish): dish is IDish => Boolean(dish));
}

export async function fetchFavouritesData(token: string): Promise<FavouritesData> {
  if (!token) return { foodFavourites: [] };
  const data = await fetchFoodData();
  const ids = readStorage<string[]>(STORAGE_KEYS.favourites(token), []);
  return {
    foodFavourites: mapDishIdsToDishes(ids, data.allDishes),
  };
}

export async function updateFavouritesData(
  token: string,
  dishId: string,
  type: "ADD_TO_FAVOURITES" | "REMOVE_FROM_FAVOURITES"
): Promise<FavouritesData> {
  if (!token) return { foodFavourites: [] };
  const key = STORAGE_KEYS.favourites(token);
  const ids = readStorage<string[]>(key, []);
  const updatedIds =
    type === "ADD_TO_FAVOURITES"
      ? Array.from(new Set([...ids, dishId]))
      : ids.filter((id) => id !== dishId);
  writeStorage(key, updatedIds);
  return fetchFavouritesData(token);
}

export async function fetchCartData(token: string): Promise<CartData> {
  if (!token) return { foodCart: [] };
  const data = await fetchFoodData();
  const storedCart = readStorage<StoredCartItem[]>(STORAGE_KEYS.cart(token), []);
  const dishMap = new Map(data.allDishes.map((dish) => [dish._id, dish]));
  const foodCart = storedCart
    .map((item) => {
      const dish = dishMap.get(item._id);
      if (!dish) return null;
      return { _id: dish, quantity: item.quantity };
    })
    .filter((cartItem): cartItem is ICart => Boolean(cartItem));
  return { foodCart };
}

export async function updateCartData(
  token: string,
  payload: { _id: string; type: string; quantity?: number }
): Promise<CartData> {
  if (!token) return { foodCart: [] };
  const key = STORAGE_KEYS.cart(token);
  const storedCart = readStorage<StoredCartItem[]>(key, []);
  const existingIndex = storedCart.findIndex((item) => item._id === payload._id);

  switch (payload.type) {
    case "ADD_TO_CART":
    case "ADD_QUANTITY_IN_CART": {
      if (existingIndex >= 0) {
        storedCart[existingIndex].quantity += 1;
      } else {
        storedCart.push({ _id: payload._id, quantity: 1 });
      }
      break;
    }
    case "SUBTRACT_QUANTITY_IN_CART": {
      if (existingIndex >= 0) {
        const nextQuantity = storedCart[existingIndex].quantity - 1;
        if (nextQuantity <= 0) {
          storedCart.splice(existingIndex, 1);
        } else {
          storedCart[existingIndex].quantity = nextQuantity;
        }
      }
      break;
    }
    case "REMOVE_FROM_CART": {
      if (existingIndex >= 0) {
        storedCart.splice(existingIndex, 1);
      }
      break;
    }
    default:
      break;
  }

  writeStorage(key, storedCart);
  return fetchCartData(token);
}

function readUsers(): StoredUser[] {
  return readStorage<StoredUser[]>(STORAGE_KEYS.users, []);
}

function writeUsers(users: StoredUser[]) {
  writeStorage(STORAGE_KEYS.users, users);
}

export async function signupUser(payload: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}): Promise<{ msg: string; token: string; firstName: string }> {
  const users = readUsers();
  const existing = users.find((user) => user.email === payload.email);
  if (existing) {
    throw new Error("User already exists");
  }
  const token = Math.random().toString(36).slice(2);
  const nextUser: StoredUser = { ...payload, token };
  writeUsers([...users, nextUser]);
  return { msg: "Your Account has been created", token, firstName: payload.firstName };
}

export async function loginUser(
  payload: LoginPayload
): Promise<{ msg: string; token: string; firstName: string }> {
  const users = readUsers();
  let user = users.find((entry) => entry.email === payload.email);
  if (!user && payload.isGuest) {
    const token = Math.random().toString(36).slice(2);
    user = {
      firstName: "John",
      lastName: "Doe",
      email: payload.email,
      password: payload.password,
      token,
    };
    writeUsers([...users, user]);
  }

  if (!user || user.password !== payload.password) {
    throw new Error("Invalid credentials");
  }

  return { msg: "Logged in successfully !", token: user.token, firstName: user.firstName };
}
