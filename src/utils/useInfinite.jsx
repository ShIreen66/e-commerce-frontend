import { useDispatch, useSelector } from "react-redux";
import { lazyLoadProduct } from "../store/reducers/productSlice";
import axios from "../api/config";
import { useEffect, useState } from "react";

const useInfinite = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 6;

  const fetchLazyProducts = async () => {
    try {
      const { data } = await axios.get(`/products`, {
        params: { page, limit },
      });

      if (data.length === 0) {
        setHasMore(false);
      } else {
        dispatch(lazyLoadProduct(data));
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Error fetching products:", error.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchLazyProducts();
  }, []);

  return { products, hasMore, fetchLazyProducts };
};

export default useInfinite;
