import axios from "../../api/config";
import { loadProduct } from "../reducers/productSlice";

export const asyncLoadProducts = () => async (dispatch, getState) => {
    try {
        const limit = getState().productReducer.products.length;
        const { data } = await axios.get(`/products?_limit=${limit}`);
        dispatch(loadProduct(data));
        console.log("Product Loaded!");
    } catch (error) {
        console.log(error);
    }
};

export const asyncCreateProduct = (product) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/products", product);
        await dispatch(asyncLoadProducts());
        console.log("Product Created!");
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const asyncUpdateProduct =
    (id, product) => async (dispatch, getState) => {
        try {
            const { data } = await axios.patch(`/products/${id}`, product);
            await dispatch(asyncLoadProducts());
            console.log("Product Updated!");
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

export const asyncDeleteProduct = (id) => async (dispatch, getState) => {
    try {
        await axios.delete("/products/" + id);
        await dispatch(asyncLoadProducts());
        console.log("Product Deleted!");
        return id;
    } catch (error) {
        console.log(error);
        throw error;
    }
};