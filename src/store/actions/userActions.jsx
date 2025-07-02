import { loginUser, logoutUser } from "../reducers/userSlice";
import axios from "../../api/config";

// ✅ Load Current User from Local Storage (Session Restore)
export const asyncCurrentUser = () => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(loginUser(user));
      console.log("Session Restored!");
    } else {
      console.log("Please login to access protected resources.");
    }
  } catch (error) {
    console.log("Error restoring session:", error);
  }
};

// ✅ User Login
export const asyncSigninUser = (user) => async (dispatch) => {
  try {
    const { data } = await axios.post("/auth/login", {
      email: user.email,
      password: user.password,
    });

    if (data.token) {
      localStorage.setItem("user", JSON.stringify(data));
      dispatch(asyncCurrentUser());
      console.log("User logged in!");
      return true;  // ✅ For Redirect
    } else {
      console.log("Login failed: No token received");
      return false;
    }
  } catch (error) {
    console.log("Login Error:", error.response?.data?.message || error.message);
    return false;
  }
};

// ✅ User Signup
export const asyncSignupUser = (user) => async () => {
  try {
    const { data } = await axios.post("/auth/register", user);
    console.log("User Registered!", data);
    return true;
  } catch (error) {
    console.log("Signup Error:", error.response?.data?.message || error.message);
    return false;
  }
};

// ✅ Update User
export const asyncUpdateUser = (id, userUpdateData) => async (dispatch) => {
  try {
    const userInfo = JSON.parse(localStorage.getItem("user"));

    const { data } = await axios.patch(`/users/${id}`, userUpdateData, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });

    localStorage.setItem("user", JSON.stringify(data));
    dispatch(loginUser(data));
    console.log("User Updated!");
  } catch (error) {
    console.log("Update Error:", error.response?.data?.message || error.message);
  }
};

// ✅ Logout
export const asyncLogoutUser = () => async (dispatch) => {
  try {
    localStorage.removeItem("user");
    dispatch(logoutUser());
    console.log("User logged out!");
  } catch (error) {
    console.log("Logout Error:", error);
  }
};

// ✅ Delete User
export const asyncDeleteUser = (id) => async (dispatch) => {
  try {
    const userInfo = JSON.parse(localStorage.getItem("user"));

    await axios.delete(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });

    localStorage.removeItem("user");
    dispatch(logoutUser());
    console.log("User Deleted!");
  } catch (error) {
    console.log("Delete Error:", error.response?.data?.message || error.message);
  }
};
