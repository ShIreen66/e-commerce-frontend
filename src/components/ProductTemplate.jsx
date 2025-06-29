import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncUpdateUser } from "../store/actions/userActions";

const ProductTemplate = ({ p }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.userReducer);

    const AddToCartHandler = () => {
        const copyUser = { ...user, cart: [...user.cart] };
        const index = user.cart.findIndex((ci) => ci.product.id === p.id);
        if (index === -1) {
            copyUser.cart.push({ product: p, quantity: 1 });
        } else {
            copyUser.cart[index] = {
                ...copyUser.cart[index],
                quantity: copyUser.cart[index].quantity + 1,
            };
        }
        dispatch(asyncUpdateUser(user.id, copyUser));
    };

    return (
        <div
            key={p.id}
            className="w-[31%] h-[65vh] shadow-md rounded-lg p-4 mr-5 mb-5 flex flex-col justify-between bg-white hover:shadow-xl transition-shadow"
        >
            <img
                className="h-[55%] object-contain mx-auto mb-3"
                src={p.image}
                alt={p.title}
            />

            <div className="flex-grow">
                <h1 className="text-lg font-semibold text-gray-800 mb-2">
                    {p.title.slice(0, 18)}...
                </h1>
                <p className="text-sm text-gray-600">
                    {p.description.slice(0, 90)}...
                </p>
            </div>

            <div className="flex justify-between items-center mt-4">
                <Link
                    to={`/update-product/${p.id}`}
                    className="text-blue-500 hover:underline text-sm font-medium"
                >
                    More Info
                </Link>
                <button
                    onClick={AddToCartHandler}
                    className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-white text-sm px-3 py-1 rounded-md transition-colors"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductTemplate;
