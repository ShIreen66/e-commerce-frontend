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
        <div className="p-6 max-w-4xl mx-auto min-h-[70vh] bg-gradient-to-br from-indigo-50 via-white to-blue-50 rounded-3xl shadow-xl border border-indigo-100 mt-8">
            <h1 className="text-3xl font-extrabold mb-8 text-indigo-700 text-center drop-shadow-md tracking-tight">
                Your Cart
            </h1>

            {user.cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16">
                    <span className="material-icons text-6xl text-indigo-200 mb-4">
                        remove_shopping_cart
                    </span>
                    <p className="text-gray-500 text-lg font-medium">
                        Your cart is empty.
                    </p>
                </div>
            ) : (
                user.cart.map((ci, i) => (
                    <div
                        key={i}
                        className="flex flex-col md:flex-row items-center justify-between bg-white/90 shadow-lg rounded-2xl p-6 mb-6 border border-gray-100 hover:shadow-2xl transition relative overflow-hidden group"
                    >
                        
                        <span className="absolute top-4 left-4 bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full shadow group-hover:scale-110 transition-transform">
                            x{ci.quantity}
                        </span>
                        <div className="flex items-center w-full md:w-auto">
                            <img
                                src={ci.product.image}
                                alt={ci.product.title}
                                className="h-24 w-24 object-contain rounded-lg bg-gray-50 border border-gray-200 mr-4 drop-shadow group-hover:scale-105 transition-transform"
                            />
                            <div>
                                <h2 className="text-lg font-bold text-indigo-700 mb-1 line-clamp-1">
                                    {ci.product.title}
                                </h2>
                                <p className="text-sm text-gray-500 mb-2">
                                    ₹ {ci.product.price}
                                </p>
                                <div className="flex items-center gap-2 mt-2">
                                    <button
                                        onClick={() => DecreaseQuantity(i)}
                                        className="flex items-center justify-center w-8 h-8 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition shadow text-xl font-bold border-2 border-red-200 focus:outline-none focus:ring-2 focus:ring-red-300"
                                        title="Remove one or delete item"
                                    >
                                        <span className="">-</span>
                                    </button>
                                    <span className="px-3 text-gray-800 font-semibold text-base">
                                        {ci.quantity}
                                    </span>
                                    <button
                                        onClick={() => IncreaseQuantity(i)}
                                        className="flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition shadow text-xl font-bold border-2 border-green-200 focus:outline-none focus:ring-2 focus:ring-green-300"
                                        title="Add one more"
                                    >
                                        <span className="">+</span>
                                    </button>
                                </div>
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
                <div className="mt-10 flex flex-col items-end">
                    <div className="bg-blue-50 rounded-xl px-8 py-6 shadow border border-blue-100 flex flex-col items-end">
                        <h2 className="text-2xl font-bold text-blue-700 mb-1 tracking-tight">
                            Total
                        </h2>
                        <span className="text-2xl text-gray-800 font-extrabold">
                            ₹ {totalPrice}
                        </span>
                    </div>
                    <button className="mt-8 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-10 py-3 rounded-full font-bold shadow-lg hover:from-blue-500 hover:to-indigo-500 transition-all text-lg tracking-wide">
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
