import { initialProducts } from "./data/products";
import {
  getDaysOfStock,
  getEstimatedStockoutDate,
  getOrderDate,
  getReorderStatus,
} from "./utils/calculations";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState(initialProducts);
  function updateProductNumber(
    productId: string,
    field: keyof (typeof products)[number],
    value: string,
  ) {
    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              [field]: Number(value),
            }
          : product,
      ),
    );
  }
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

        <section className="overflow-x-auto rounded-xl bg-white shadow-sm">
          <table className="min-w-max border-collapse text-sm">
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
              {products.map((product) => (
                <tr key={product.id} className="border-t border-slate-200">
                  <td className="px-4 py-3">{product.name}</td>

                  <td className="px-4 py-3">{product.sku}</td>

                  <td className="px-4 py-3">
                    <input
                      type="number"
                      value={product.shopStock}
                      onChange={(event) =>
                        updateProductNumber(
                          product.id,
                          "shopStock",
                          event.target.value,
                        )
                      }
                      className="w-24 rounded-md border border-slate-300 px-2 py-1"
                    />
                  </td>

                  <td className="px-4 py-3">
                    <input
                      type="number"
                      value={product.amazonStock}
                      onChange={(event) =>
                        updateProductNumber(
                          product.id,
                          "amazonStock",
                          event.target.value,
                        )
                      }
                      className="w-24 rounded-md border border-slate-300 px-2 py-1"
                    />
                  </td>

                  <td className="px-4 py-3">
                    <input
                      type="number"
                      value={product.incomingStock}
                      onChange={(event) =>
                        updateProductNumber(
                          product.id,
                          "incomingStock",
                          event.target.value,
                        )
                      }
                      className="w-24 rounded-md border border-slate-300 px-2 py-1"
                    />
                  </td>

                  <td className="px-4 py-3">
                    <input
                      type="number"
                      value={product.leadTimeDays}
                      onChange={(event) =>
                        updateProductNumber(
                          product.id,
                          "leadTimeDays",
                          event.target.value,
                        )
                      }
                      className="w-24 rounded-md border border-slate-300 px-2 py-1"
                    />
                  </td>

                  <td className="px-4 py-3">
                    <input
                      type="number"
                      value={product.safetyStockDays}
                      onChange={(event) =>
                        updateProductNumber(
                          product.id,
                          "safetyStockDays",
                          event.target.value,
                        )
                      }
                      className="w-24 rounded-md border border-slate-300 px-2 py-1"
                    />
                  </td>

                  <td className="px-4 py-3">
                    <input
                      type="number"
                      value={product.dailyUsageShop}
                      onChange={(event) =>
                        updateProductNumber(
                          product.id,
                          "dailyUsageShop",
                          event.target.value,
                        )
                      }
                      className="w-24 rounded-md border border-slate-300 px-2 py-1"
                    />
                  </td>

                  <td className="px-4 py-3">
                    <input
                      type="number"
                      value={product.dailyUsageAmazon}
                      onChange={(event) =>
                        updateProductNumber(
                          product.id,
                          "dailyUsageAmazon",
                          event.target.value,
                        )
                      }
                      className="w-24 rounded-md border border-slate-300 px-2 py-1"
                    />
                  </td>

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
