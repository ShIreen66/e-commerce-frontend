import { lazy, Suspense, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingProduct from "../components/LoadingProduct";
import useInfinite from "../utils/useInfinite";
const ProductTemplate = lazy(() => import("../components/ProductTemplate"));

const Products = () => {
  const { products, hasMore, fetchLazyProducts } = useInfinite();

  const desiredOrder = ["All", "jewelery", "women's clothing", "men's clothing", "electronics"];

  const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));

  const categories = desiredOrder.filter((cat) => cat === "All" || uniqueCategories.includes(cat));

  uniqueCategories.forEach((cat) => {
    if (!categories.includes(cat)) categories.push(cat);
  });

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-6 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border transition-colors font-medium text-sm ${
              selectedCategory === cat
                ? "bg-red-400 text-white border-red-400"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Infinite Scroll Product List */}
      <InfiniteScroll
        dataLength={filteredProducts.length}
        next={fetchLazyProducts}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="w-full flex flex-wrap">
          {filteredProducts.map((p) => (
            <Suspense key={p._id} fallback={<LoadingProduct />}>
              <ProductTemplate p={p} />
            </Suspense>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Products;
