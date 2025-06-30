import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
    asyncDeleteUser,
    asyncLogoutUser,
    asyncUpdateUser,
} from "../store/actions/userActions";

const Settings = () => {
    const { user } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm({
        defaultValues: {
            username: user?.username,
            email: user?.email,
            password: user?.password,
        },
    });

    const UpdateHandler = (updatedUser) => {
        dispatch(asyncUpdateUser(user?.id, updatedUser));
    };

    const DeleteHandler = () => {
        dispatch(asyncDeleteUser(user.id));
    };

    const LogoutHandler = () => {
        dispatch(asyncLogoutUser());
    };

    return (
        <div className="flex justify-center items-center min-h-[90vh] bg-gradient-to-br from-indigo-100 via-white to-blue-100 px-4">
            <form
                onSubmit={handleSubmit(UpdateHandler)}
                className="w-full max-w-lg bg-white/90 p-10 rounded-3xl shadow-2xl border border-indigo-100 relative overflow-hidden"
            >
                {/* Decorative gradient circle */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full opacity-30 z-0 animate-pulse"></div>
                <h2 className="text-3xl font-extrabold text-indigo-700 mb-8 text-center drop-shadow-md tracking-tight z-10">
                    User Settings
                </h2>

                <div className="space-y-6 z-10">
                    <input
                        {...register("username")}
                        className="w-full text-base px-5 py-3 border-b border-gray-300 rounded-t-md focus:ring-2 focus:ring-indigo-400 outline-none transition bg-gray-50"
                        type="text"
                        placeholder="Enter Username"
                    />

                    <input
                        {...register("email")}
                        className="w-full text-base px-5 py-3 border-b border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition bg-gray-50"
                        type="email"
                        placeholder="Enter Email"
                    />

                    <label className="block">
                        <span className="text-gray-700 font-semibold mb-1 block">
                            Password
                        </span>
                        <input
                            {...register("password")}
                            className="w-full text-base px-5 py-3 border-b border-gray-300 rounded-b-md focus:ring-2 focus:ring-indigo-400 outline-none transition bg-gray-50"
                            type="text"
                            placeholder="Enter Password"
                        />
                    </label>
                </div>

                <div className="flex flex-col gap-4 mt-10 z-10">
                    <button
                        type="submit"
                        className="w-full text-white rounded-xl text-lg px-5 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-blue-500 hover:to-indigo-500 transition font-bold shadow-lg"
                    >
                        Update Profile
                    </button>

                    <button
                        type="button"
                        onClick={LogoutHandler}
                        className="w-full text-white rounded-xl text-lg px-5 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 transition font-bold shadow-lg"
                    >
                        Logout
                    </button>

                    <button
                        type="button"
                        onClick={DeleteHandler}
                        className="w-full text-white rounded-xl text-lg px-5 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 transition font-bold shadow-lg"
                    >
                        Delete Account
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Settings;
