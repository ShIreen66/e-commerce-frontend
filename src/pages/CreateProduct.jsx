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
        <div className="flex justify-center items-center min-h-[80vh] bg-gradient-to-br from-indigo-100 via-white to-blue-100">
            <form
                onSubmit={handleSubmit(CreateProductHandler)}
                className="w-full max-w-xl bg-white/95 p-10 rounded-3xl shadow-2xl border border-indigo-100 relative overflow-hidden"
            >
               
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full opacity-30 z-0 animate-pulse"></div>
                <h2 className="text-3xl font-extrabold mb-8 text-center text-indigo-700 drop-shadow-md tracking-tight z-10">
                    Create New Product
                </h2>
                <div className="space-y-6 z-10">
                    <input
                        {...register("image")}
                        className="w-full text-lg px-5 py-3 border-b border-gray-300 rounded-t-md focus:ring-2 focus:ring-indigo-400 outline-none transition bg-gray-50"
                        type="url"
                        placeholder="Product Image URL"
                        required
                    />
                    <input
                        {...register("title")}
                        className="w-full text-lg px-5 py-3 border-b border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition bg-gray-50"
                        type="text"
                        placeholder="Product Title"
                        required
                    />
                    <input
                        {...register("price")}
                        className="w-full text-lg px-5 py-3 border-b border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition bg-gray-50"
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="0.00"
                        required
                    />
                    <input
                        {...register("category")}
                        className="w-full text-lg px-5 py-3 border-b border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition bg-gray-50"
                        type="text"
                        placeholder="Product Category"
                        required
                    />
                    <textarea
                        {...register("description")}
                        className="w-full text-lg px-5 py-3 border-b border-gray-300 rounded-b-md focus:ring-2 focus:ring-indigo-400 outline-none transition bg-gray-50 resize-none"
                        rows={4}
                        placeholder="Product Description Here..."
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full text-white rounded-xl mt-8 text-xl px-5 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-blue-500 hover:to-indigo-500 transition font-bold shadow-lg z-10"
                >
                    Create Product
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;