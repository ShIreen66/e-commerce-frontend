import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { asyncSigninUser } from "../store/actions/userActions";
const Signin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const SigninHandler = (user) => {
        dispatch(asyncSigninUser(user));
        navigate("/");
    };
    return (
        <div className="flex justify-center items-center min-h-[80vh] bg-gray-50">
            <form onSubmit={handleSubmit(SigninHandler)} className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Sign In</h2>
                <input
                    {...register("email")}
                    className="w-full text-lg mb-5 p-3 border-b border-gray-300 outline-0 focus:border-blue-400 transition"
                    type="email"
                    placeholder="Email address"
                    required
                />
                <input
                    {...register("password")}
                    className="w-full text-lg mb-5 p-3 border-b border-gray-300 outline-0 focus:border-blue-400 transition"
                    type="password"
                    placeholder="Password"
                    required
                />
                <button className="w-full text-white rounded mt-5 text-xl px-5 py-3 bg-blue-600 hover:bg-blue-700 transition font-semibold shadow cursor-pointer">
                    Sign In
                </button>
                <p className="mt-6 text-center text-base">
                    Don't have an account?{' '}
                    <Link className="text-blue-600 hover:underline font-semibold" to="/signup">
                        Signup
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Signin;