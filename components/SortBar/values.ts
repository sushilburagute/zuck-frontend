export interface IValues {
  name: string;
  query: string;
}

export const sortValues: IValues[] = [
  {
    name: "Relevance",
    query: "RELEVANCE",
  },
  {
    name: "Delivery Time",
    query: "DELIVERY_TIME",
  },
  {
    name: "Rating",
    query: "RATING",
  },
  {
    name: "Cost: Low to High",
    query: "COST_LOW_TO_HIGH",
  },
  {
    name: "Cost: High to Low",
    query: "COST_HIGH_TO_LOW",
  },
];

export const filterValues: IValues[] = [
  {
    name: "Pure Veg",
    query: "PURE_VEG",
  },
  {
    name: "Discount",
    query: "DISCOUNT",
  },
];
