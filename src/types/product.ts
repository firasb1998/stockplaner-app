export type Product = {
  id: string;
  name: string;
  sku: string;

  shopStock: number;
  amazonStock: number;
  incomingStock: number;

  leadTimeDays: number;
  safetyStockDays: number;

  dailyUsageShop: number;
  dailyUsageAmazon: number;
};
