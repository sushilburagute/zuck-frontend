export enum DishType {
  DESSERT = "DESSERT",
  MAIN_COURSE = "MAIN_COURSE",
  FAST_FOOD = "FAST_FOOD",
}

export interface IDish {
  _id: string;
  name: string;
  deliveryTime: number;
  price: number;
  discount: number;
  rating: number;
  veg: boolean;
  type: DishType;
  image: string;
  description: string;
}
