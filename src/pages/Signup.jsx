import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncSignupUser } from "../store/actions/userActions";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const SignupHandler = async (user) => {
    const success = await dispatch(asyncSignupUser(user));
    if (success) navigate("/signin");
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gradient-to-br from-indigo-100 via-white to-blue-100">
      <form
        onSubmit={handleSubmit(SignupHandler)}
        className="w-full max-w-md bg-white/95 p-10 rounded-3xl shadow-2xl border border-indigo-100 relative overflow-hidden"
      >
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full opacity-30 z-0 animate-pulse"></div>
        <h2 className="text-3xl font-extrabold text-indigo-700 mb-8 text-center drop-shadow-md tracking-tight z-10">
          Sign Up
        </h2>

        <div className="space-y-6 z-10">
          <input
            {...register("username")}
            className="w-full text-lg px-5 py-3 border-b border-gray-300 rounded-t-md focus:ring-2 focus:ring-indigo-400 outline-none transition bg-gray-50"
            type="text"
            placeholder="Username"
            required
          />
          <input
            {...register("email")}
            className="w-full text-lg px-5 py-3 border-b border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition bg-gray-50"
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

        <button
          className="w-full text-white rounded-xl mt-8 text-xl px-5 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-blue-500 hover:to-indigo-500 transition font-bold shadow-lg z-10"
          type="submit"
        >
          Sign Up
        </button>

        <p className="mt-8 text-center text-base z-10">
          Already have an account?{" "}
          <Link className="text-blue-600 hover:underline font-semibold" to="/signin">
            Signin
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
