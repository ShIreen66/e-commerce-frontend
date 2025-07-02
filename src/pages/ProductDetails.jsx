import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  asyncDeleteProduct,
  asyncGetSingleProduct,
  asyncUpdateProduct,
} from "../store/actions/productActions";
import { asyncUpdateUser } from "../store/actions/userActions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useSelector((state) => state.userReducer);
  const { singleProduct } = useSelector((state) => state.productReducer);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      image: singleProduct?.image,
      title: singleProduct?.title,
      price: singleProduct?.price,
      category: singleProduct?.category,
      description: singleProduct?.description,
    },
  });

  useEffect(() => {
    dispatch(asyncGetSingleProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (singleProduct) {
      reset({
        image: singleProduct.image,
        title: singleProduct.title,
        price: singleProduct.price,
        category: singleProduct.category,
        description: singleProduct.description,
      });
    }
  }, [singleProduct, reset]);

  const UpdateProductHandler = (updatedProduct) => {
    dispatch(asyncUpdateProduct(id, updatedProduct));
    toast.success("Product updated successfully!");
    setTimeout(() => {
      navigate("/");
    }, 1200);
  };

  const DeleteHandler = () => {
    dispatch(asyncDeleteProduct(id));
    navigate("/");
  };

  const handleAddToCart = () => {
    if (!user) {
      toast.warn("Please sign in first", { position: "top-right" });
      return;
    }
    const copyUser = { ...user, cart: [...user.cart] };
    const index = user.cart.findIndex((ci) => ci.product._id === singleProduct._id);
    if (index === -1) {
      copyUser.cart.push({ product: singleProduct, quantity: 1 });
    } else {
      copyUser.cart[index] = {
        ...copyUser.cart[index],
        quantity: copyUser.cart[index].quantity + 1,
      };
    }
    dispatch(asyncUpdateUser(user._id, copyUser));
    toast.success("Product added to cart", { position: "top-right" });
    setTimeout(() => navigate("/cart"), 800);
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={1200} hideProgressBar={false} />

      {singleProduct ? (
        <div className="w-full flex flex-col md:flex-row gap-8 items-start justify-center p-6 bg-gray-50 min-h-[80vh]">
          <div className="w-full max-w-lg bg-white shadow-xl rounded-xl p-8 border border-gray-100">
            <img
              className="h-64 w-full object-contain rounded mb-6 bg-gray-100"
              src={singleProduct.image}
              alt={singleProduct.title}
            />
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{singleProduct.title}</h1>
            <p className="text-lg text-gray-700 mb-4">{singleProduct.description}</p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-blue-600">₹ {singleProduct.price}</span>
              <span className="text-base text-gray-500 bg-gray-200 rounded px-3 py-1">
                {singleProduct.category}
              </span>
            </div>
            <button
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg shadow transition cursor-pointer text-xl"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>

          {user?.isAdmin && (
            <form
              onSubmit={handleSubmit(UpdateProductHandler)}
              className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Edit Product</h2>
              <input
                {...register("image")}
                className="w-full text-lg mb-5 p-3 border-b border-gray-300 outline-0 focus:border-blue-400 transition"
                type="url"
                placeholder="Product Image URL"
                required
              />
              <input
                {...register("title")}
                className="w-full text-lg mb-5 p-3 border-b border-gray-300 outline-0 focus:border-blue-400 transition"
                type="text"
                placeholder="Product Title"
                required
              />
              <input
                {...register("price")}
                className="w-full text-lg mb-5 p-3 border-b border-gray-300 outline-0 focus:border-blue-400 transition"
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                required
              />
              <input
                {...register("category")}
                className="w-full text-lg mb-5 p-3 border-b border-gray-300 outline-0 focus:border-blue-400 transition"
                type="text"
                placeholder="Product Category"
                required
              />
              <textarea
                {...register("description")}
                className="w-full text-lg mb-5 p-3 border-b border-gray-300 outline-0 focus:border-blue-400 transition resize-none"
                rows={4}
                placeholder="Product Description Here..."
                required
              ></textarea>
              <button
                type="submit"
                className="w-full text-white rounded mt-3 text-xl px-5 py-3 bg-blue-600 hover:bg-blue-700 transition font-semibold shadow cursor-pointer"
              >
                Update Product
              </button>
              <button
                onClick={DeleteHandler}
                type="button"
                className="w-full text-white rounded mt-5 text-xl px-5 py-3 bg-red-500 hover:bg-red-600 transition font-semibold shadow cursor-pointer"
              >
                Delete Product
              </button>
            </form>
          )}
        </div>
      ) : (
        <p className="text-center text-xl mt-10">Loading product details...</p>
      )}
    </>
  );
};

export default ProductDetails;
