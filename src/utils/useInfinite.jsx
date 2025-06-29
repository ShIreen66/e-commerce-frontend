import { useDispatch, useSelector } from "react-redux";
import { lazyLoadProduct } from "../store/reducers/productSlice";
import axios from "../api/config";
import { useEffect, useState } from "react";

const useInfinite = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.productReducer);
    const [hasMore, setHasMore] = useState(true);
    const fetchLazyProducts = async () => {
        try {
            const { data } = await axios.get(
                `/products?_limit=6&_start=${products.length}`
            );
            if (data.length === 0) {
                setHasMore(false);
            } else {
                dispatch(lazyLoadProduct(data));
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchLazyProducts();
    }, []);

    return { products, hasMore, fetchLazyProducts };
};

export default useInfinite;