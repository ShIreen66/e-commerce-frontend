import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Nav = () => {
    const { user } = useSelector((state) => state.userReducer);

    const navLinkStyles = ({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            isActive ? "text-white bg-red-400" : "text-gray-700 hover:bg-gray-200"
        }`;

    return (
        <nav className="flex flex-wrap gap-4 mb-10 p-3 bg-white shadow-sm rounded-md">
            <NavLink className={navLinkStyles} to="/">
                Home
            </NavLink>

            {user ? (
                <>
                    <NavLink className={navLinkStyles} to="/settings">
                        User Settings
                    </NavLink>

                    {user?.isAdmin && (
                        <NavLink className={navLinkStyles} to="/create-product">
                            Create Product
                        </NavLink>
                    )}

                    <NavLink className={navLinkStyles} to="/cart">
                        Cart
                    </NavLink>
                </>
            ) : (
                <NavLink className={navLinkStyles} to="/signin">
                    Signin
                </NavLink>
            )}

            <NavLink className={navLinkStyles} to="/about">
                About
            </NavLink>
        </nav>
    );
};

export default Nav;
