import axios from "../../api/config";
import { loadProduct } from "../reducers/productSlice";

// ✅ Load All Products
export const asyncLoadProducts = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/products");
    dispatch(loadProduct(data));
    console.log("Products Loaded!");
  } catch (error) {
    console.log("Error loading products:", error.response?.data?.message);
  }
};

// ✅ Create Product (Admin Only)
export const asyncCreateProduct = (product) => async (dispatch, getState) => {
  try {
    const token = localStorage.getItem("token");
    await axios.post("/products", product, {
      headers: { Authorization: `Bearer ${token}` },
    });
    await dispatch(asyncLoadProducts());
    console.log("Product Created!");
  } catch (error) {
    console.log("Create Product Error:", error.response?.data?.message);
    throw error;
  }
};

// ✅ Update Product (Admin Only)
export const asyncUpdateProduct = (id, product) => async (dispatch, getState) => {
  try {
    const token = localStorage.getItem("token");
    await axios.patch(`/products/${id}`, product, {
      headers: { Authorization: `Bearer ${token}` },
    });
    await dispatch(asyncLoadProducts());
    console.log("Product Updated!");
  } catch (error) {
    console.log("Update Product Error:", error.response?.data?.message);
    throw error;
  }
};

// ✅ Delete Product (Admin Only)
export const asyncDeleteProduct = (id) => async (dispatch, getState) => {
  try {
    const token = localStorage.getItem("token");
    await axios.delete(`/products/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    await dispatch(asyncLoadProducts());
    console.log("Product Deleted!");
  } catch (error) {
    console.log("Delete Product Error:", error.response?.data?.message);
    throw error;
  }
};
