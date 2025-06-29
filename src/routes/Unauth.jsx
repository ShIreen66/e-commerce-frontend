import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Unauth = (props) => {
    const { user } = useSelector((state) => state.userReducer);
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        // Simulate async auth check
        const timer = setTimeout(() => setChecking(false), 400);
        return () => clearTimeout(timer);
    }, []);

    if (checking) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mr-4"></div>
                <span className="text-lg text-gray-600">Checking authentication...</span>
            </div>
        );
    }
    return !user ? props.children : (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <p className="text-xl text-green-600 mb-4 font-semibold">You are already signed in.</p>
            <Navigate to="/" />
        </div>
    );
};

export default Unauth;