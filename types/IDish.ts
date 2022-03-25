export interface IDish {
  _id: string;
  name: string;
  deliveryTime: number;
  price: number;
  discount: number;
  rating: number;
  veg: boolean;
  type: "DESSERT" | "MAIN_COURSE" | "FAST_FOOD";
  image: string;
  description: string;
}
