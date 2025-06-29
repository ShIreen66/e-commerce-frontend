import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateUser } from "../store/actions/userActions";

const Cart = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.userReducer);

    const IncreaseQuantity = (index) => {
        const copyUser = { ...user, cart: [...user.cart] };
        copyUser.cart[index] = {
            ...copyUser.cart[index],
            quantity: copyUser.cart[index].quantity + 1,
        };
        dispatch(asyncUpdateUser(user.id, copyUser));
    };

    const DecreaseQuantity = (index) => {
        const copyUser = { ...user, cart: [...user.cart] };
        if (copyUser.cart[index].quantity === 1) {
            copyUser.cart.splice(index, 1);
        } else {
            copyUser.cart[index] = {
                ...copyUser.cart[index],
                quantity: copyUser.cart[index].quantity - 1,
            };
        }
        dispatch(asyncUpdateUser(user.id, copyUser));
    };

    const totalPrice = user.cart.reduce(
        (acc, curr) => acc + Number(curr.product.price) * curr.quantity,
        0
    );

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h1>

            {user.cart.length === 0 ? (
                <p className="text-gray-600 text-center">Your cart is empty.</p>
            ) : (
                user.cart.map((ci, i) => (
                    <div
                        key={i}
                        className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-xl p-6 mb-6 border border-gray-100 hover:shadow-xl transition"
                    >
                        <div className="flex items-center w-full md:w-auto">
                            <img
                                src={ci.product.image}
                                alt={ci.product.title}
                                className="h-24 w-24 object-contain rounded-lg bg-gray-50 border border-gray-200 mr-4"
                            />
                            <div>
                                <h2 className="text-lg font-bold text-gray-900 mb-1">
                                    {ci.product.title}
                                </h2>
                                <p className="text-sm text-gray-500 mb-2">
                                    ₹ {ci.product.price}
                                </p>
                                <button
                                    onClick={() => DecreaseQuantity(i)}
                                    className="bg-red-100 text-red-600 px-2 py-1 rounded hover:bg-red-200 transition mr-2"
                                    title="Remove one or delete item"
                                >
                                    <span className="font-bold">-</span>
                                </button>
                                <span className="px-3 text-gray-800 font-semibold text-base">
                                    {ci.quantity}
                                </span>
                                <button
                                    onClick={() => IncreaseQuantity(i)}
                                    className="bg-green-100 text-green-600 px-2 py-1 rounded hover:bg-green-200 transition"
                                    title="Add one more"
                                >
                                    <span className="font-bold">+</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col items-end mt-4 md:mt-0">
                            <span className="text-base text-gray-700 font-medium">
                                Subtotal:
                            </span>
                            <span className="text-lg font-bold text-blue-600">
                                ₹ {Number(ci.product.price) * ci.quantity}
                            </span>
                        </div>
                    </div>
                ))
            )}

            {user.cart.length > 0 && (
                <div className="mt-8 flex flex-col items-end">
                    <div className="bg-blue-50 rounded-lg px-6 py-4 shadow border border-blue-100">
                        <h2 className="text-2xl font-bold text-blue-700 mb-1">
                            Total
                        </h2>
                        <span className="text-xl text-gray-800 font-semibold">
                            ₹ {totalPrice}
                        </span>
                    </div>
                    <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
