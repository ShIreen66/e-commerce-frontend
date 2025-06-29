import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { asyncCreateProduct } from "../store/actions/productActions";
const CreateProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const CreateProductHandler = (product) => {
        product.id = nanoid();
        dispatch(asyncCreateProduct(product));
        navigate("/");
    };
    return (
        <div className="flex justify-center items-center min-h-[80vh] bg-gray-50">
            <form
                onSubmit={handleSubmit(CreateProductHandler)}
                className="w-full max-w-xl bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            >
                <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">
                    Create New Product
                </h2>
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
                    className="w-full text-white rounded mt-5 text-xl px-5 py-3 bg-blue-600 hover:bg-blue-700 transition font-semibold shadow cursor-pointer"
                >
                    Create Product
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;