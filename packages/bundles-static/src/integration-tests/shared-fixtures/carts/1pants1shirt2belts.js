import { pants, belt, shirt } from "../products";
import { defaultCart } from "./defaultCart";

export const cart1pants1shirt2belts = {
  ...defaultCart,
  // key: "cart1pants1shirt2belts",
  lineItems: [
    {
      sku: pants.masterVariant.sku,
      quantity: 1,
    },
    {
      sku: shirt.masterVariant.sku,
      quantity: 1,
    },
    {
      sku: belt.masterVariant.sku,
      quantity: 2,
    },
  ],
};

export default cart1pants1shirt2belts;