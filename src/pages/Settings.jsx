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
        <div className="flex justify-center items-center min-h-[90vh] bg-gray-100 px-4">
            <form
                onSubmit={handleSubmit(UpdateHandler)}
                className="w-full max-w-lg bg-white p-8 rounded-xl shadow-md border border-gray-200"
            >
                <h2 className="text-3xl font-bold text-indigo-600 mb-8 text-center">
                    User Settings
                </h2>

                <div className="space-y-5">
                    <input
                        {...register("username")}
                        className="w-full text-base px-4 py-3 border rounded-md focus:ring-2 focus:ring-indigo-400 outline-none transition"
                        type="text"
                        placeholder="Enter Username"
                    />

                    <input
                        {...register("email")}
                        className="w-full text-base px-4 py-3 border rounded-md focus:ring-2 focus:ring-indigo-400 outline-none transition"
                        type="email"
                        placeholder="Enter Email"
                    />

                    <input
                        {...register("password")}
                        className="w-full text-base px-4 py-3 border rounded-md focus:ring-2 focus:ring-indigo-400 outline-none transition"
                        type="password"
                        placeholder="Enter Password"
                    />
                </div>

                <div className="flex flex-col gap-4 mt-8">
                    <button
                        type="submit"
                        className="w-full text-white rounded-md text-lg px-5 py-3 bg-indigo-600 hover:bg-indigo-700 transition font-semibold shadow"
                    >
                        Update Profile
                    </button>

                    <button
                        type="button"
                        onClick={LogoutHandler}
                        className="w-full text-white rounded-md text-lg px-5 py-3 bg-yellow-500 hover:bg-yellow-600 transition font-semibold shadow"
                    >
                        Logout
                    </button>

                    <button
                        type="button"
                        onClick={DeleteHandler}
                        className="w-full text-white rounded-md text-lg px-5 py-3 bg-red-500 hover:bg-red-600 transition font-semibold shadow"
                    >
                        Delete Account
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Settings;
