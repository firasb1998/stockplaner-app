import type { Product } from "../types/product";

export const initialProducts: Product[] = [
  {
    id: "1",
    name: "Produkt 1",
    sku: "001",

    shopStock: 962,
    amazonStock: 543,
    incomingStock: 3000,

    leadTimeDays: 108,
    safetyStockDays: 15,

    dailyUsageShop: 5,
    dailyUsageAmazon: 19,
  },
];
