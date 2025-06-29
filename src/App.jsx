import { useEffect } from "react";
import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";
import { useDispatch, useSelector } from "react-redux";
import { asyncCurrentUser } from "./store/actions/userActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    const { user } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        !user && dispatch(asyncCurrentUser());
    }, [user]);

    return (
        <div className="min-h-screen bg-gray-50">
            <ToastContainer position="top-center" autoClose={1500} hideProgressBar={false} />
            <div className="max-w-6xl mx-auto py-10 px-4 sm:px-8 font-thin">
                <Nav />
                <div className="mt-8">
                    <MainRoutes />
                </div>
            </div>
        </div>
    );
};

export default App;