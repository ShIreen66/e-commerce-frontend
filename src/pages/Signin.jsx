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
        <div className="flex justify-center items-center min-h-[80vh] bg-gradient-to-br from-indigo-100 via-white to-blue-100">
            <form onSubmit={handleSubmit(SigninHandler)} className="w-full max-w-md bg-white/95 p-10 rounded-3xl shadow-2xl border border-indigo-100 relative overflow-hidden">
            
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full opacity-30 z-0 animate-pulse"></div>
                <h2 className="text-3xl font-extrabold text-indigo-700 mb-8 text-center drop-shadow-md tracking-tight z-10">Sign In</h2>
                <div className="space-y-6 z-10">
                    <input
                        {...register("email")}
                        className="w-full text-lg px-5 py-3 border-b border-gray-300 rounded-t-md focus:ring-2 focus:ring-indigo-400 outline-none transition bg-gray-50"
                        type="email"
                        placeholder="Email address"
                        required
                    />
                    <input
                        {...register("password")}
                        className="w-full text-lg px-5 py-3 border-b border-gray-300 rounded-b-md focus:ring-2 focus:ring-indigo-400 outline-none transition bg-gray-50"
                        type="password"
                        placeholder="Password"
                        required
                    />
                </div>
                <button className="w-full text-white rounded-xl mt-8 text-xl px-5 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-blue-500 hover:to-indigo-500 transition font-bold shadow-lg z-10">
                    Sign In
                </button>
                <p className="mt-8 text-center text-base z-10">
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