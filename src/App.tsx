import { initialProducts } from "./data/products";
import {
  getDaysOfStock,
  getEstimatedStockoutDate,
  getOrderDate,
  getReorderStatus,
} from "./utils/calculations";

function App() {
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-slate-900">
            Stockplaner 2026
          </h1>

          <p className="mt-2 text-slate-600">
            Interaktive Übersicht für Lagerbestand und Nachbestellung.
          </p>
        </header>

        <section className="overflow-hidden rounded-xl bg-white shadow-sm">
          <table className="min-w-full border-collapse">
            <thead className="bg-slate-100 text-left text-sm text-slate-700">
              <tr>
                <th className="px-4 py-3">Produkt</th>
                <th className="px-4 py-3">SKU</th>
                <th className="px-4 py-3">Shop Stock</th>
                <th className="px-4 py-3">Amazon Stock</th>
                <th className="px-4 py-3">Incoming</th>
                <th className="px-4 py-3">Lead Time</th>
                <th className="px-4 py-3">Safety Stock</th>
                <th className="px-4 py-3">Daily Usage Shop</th>
                <th className="px-4 py-3">Daily Usage Amazon</th>
                <th className="px-4 py-3">Days of Stock</th>
                <th className="px-4 py-3">Stockout Date</th>
                <th className="px-4 py-3">Order Date</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {initialProducts.map((product) => (
                <tr key={product.id} className="border-t border-slate-200">
                  <td className="px-4 py-3">{product.name}</td>

                  <td className="px-4 py-3">{product.sku}</td>

                  <td className="px-4 py-3">{product.shopStock}</td>

                  <td className="px-4 py-3">{product.amazonStock}</td>

                  <td className="px-4 py-3">{product.incomingStock}</td>

                  <td className="px-4 py-3">{product.leadTimeDays} Tage</td>

                  <td className="px-4 py-3">{product.safetyStockDays} Tage</td>

                  <td className="px-4 py-3">{product.dailyUsageShop}</td>

                  <td className="px-4 py-3">{product.dailyUsageAmazon}</td>

                  <td className="px-4 py-3 font-medium">
                    {getDaysOfStock(product)} Tage
                  </td>

                  <td className="px-4 py-3">
                    {getEstimatedStockoutDate(product).toLocaleDateString(
                      "de-DE",
                    )}
                  </td>

                  <td className="px-4 py-3">
                    {getOrderDate(product).toLocaleDateString("de-DE")}
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        getReorderStatus(product) === "OK"
                          ? "bg-green-100 text-green-700"
                          : getReorderStatus(product) === "SOON"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {getReorderStatus(product)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}

export default App;
