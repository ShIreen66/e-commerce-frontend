import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Products = lazy(() => import("../pages/Products"));
const Signin = lazy(() => import("../pages/Signin"));
const Signup = lazy(() => import("../pages/Signup"));
const About = lazy(() => import("../pages/About"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const Settings = lazy(() => import("../pages/Settings"));
const Cart = lazy(() => import("../pages/Cart"));
const CreateProduct = lazy(() => import("../pages/CreateProduct"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Auth = lazy(() => import("./Auth"));
const Unauth = lazy(() => import("./Unauth"));

const MainRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[70vh] bg-gray-50">
          <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-blue-600 mr-4"></div>
          <span className="text-xl text-gray-600">Loading...</span>
        </div>
      }
    >
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/signin"
          element={
            <Unauth>
              <Signin />
            </Unauth>
          }
        />
        <Route
          path="/signup"
          element={
            <Unauth>
              <Signup />
            </Unauth>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/settings"
          element={
            <Auth>
              <Settings />
            </Auth>
          }
        />
        <Route
          path="/cart"
          element={
            <Auth>
              <Cart />
            </Auth>
          }
        />
        <Route
          path="/create-product"
          element={
            <Auth>
              <CreateProduct />
            </Auth>
          }
        />
        <Route
          path="/update-product/:id"
          element={
            <Auth>
              <ProductDetails />
            </Auth>
          }
        />

        {/* 404 Page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
