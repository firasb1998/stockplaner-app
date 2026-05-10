import type { Product } from "../types/product";
import { addDays } from "date-fns";

export function getTotalStock(product: Product) {
  return product.shopStock + product.amazonStock;
}

export function getDailyUsage(product: Product) {
  return product.dailyUsageShop + product.dailyUsageAmazon;
}

export function getDaysOfStock(product: Product) {
  const totalStock = getTotalStock(product);
  const dailyUsage = getDailyUsage(product);

  if (dailyUsage === 0) {
    return 0;
  }

  return Math.ceil(totalStock / dailyUsage);
}

export function getEstimatedStockoutDate(product: Product) {
  const daysOfStock = getDaysOfStock(product);

  return addDays(new Date(), daysOfStock);
}
