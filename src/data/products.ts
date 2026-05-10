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
  {
    id: "2",
    name: "Produkt 2",
    sku: "002",

    shopStock: 4567,
    amazonStock: 201,
    incomingStock: 2000,

    leadTimeDays: 106,
    safetyStockDays: 10,

    dailyUsageShop: 4,
    dailyUsageAmazon: 7,
  },
  {
    id: "3",
    name: "Produkt 3",
    sku: "003",

    shopStock: 318,
    amazonStock: 96,
    incomingStock: 1000,

    leadTimeDays: 8,
    safetyStockDays: 5,

    dailyUsageShop: 8,
    dailyUsageAmazon: 10,
  },
];
