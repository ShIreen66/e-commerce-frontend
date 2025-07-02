import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserCog,
  FaShoppingCart,
  FaSignInAlt,
  FaInfoCircle,
  FaPlus,
} from "react-icons/fa";

const Nav = () => {
  const { user } = useSelector((state) => state.userReducer);

  const navLinkStyles = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg text-base font-semibold transition-all duration-200 shadow-sm ${
      isActive
        ? "text-white bg-gradient-to-r from-red-400 to-pink-400 shadow-md"
        : "text-gray-700 bg-white hover:bg-gray-100 hover:shadow-md"
    }`;

  return (
    <nav className="flex justify-between items-center flex-wrap gap-4 mb-10 p-4 bg-white shadow-lg rounded-xl border border-gray-100">
      <div className="flex gap-4 items-center">
        <NavLink className={navLinkStyles} to="/">
          <FaHome /> Home
        </NavLink>

        {/* ✅ Create Product button (Admin Only) */}
        {user?.role === "admin" && (
          <NavLink className={navLinkStyles} to="/create-product">
            <FaPlus /> Create Product
          </NavLink>
        )}

        <NavLink className={navLinkStyles} to="/about">
          <FaInfoCircle /> About
        </NavLink>

        <NavLink className={navLinkStyles} to="/cart">
          <FaShoppingCart /> Cart
        </NavLink>
      </div>

      <div className="flex gap-4 items-center">
        {/* ✅ User Logged In */}
        {user ? (
          <NavLink className={navLinkStyles} to="/settings">
            <FaUserCog /> Settings
          </NavLink>
        ) : (
          <NavLink className={navLinkStyles} to="/signin">
            <FaSignInAlt /> Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Nav;
