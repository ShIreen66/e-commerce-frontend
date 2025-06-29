import { loginUser, logoutUser } from "../reducers/userSlice";
import axios from "../../api/config";

export const asyncCurrentUser = () => async (dispatch, getState) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            dispatch(loginUser(user));
            console.log("Session Restored!");
        } else {
            console.log("Login to access the resource!");
        }
    } catch (error) {
        console.log(error);
    }
};

export const asyncSigninUser = (user) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(
            `/users?email=${user.email}&password=${user.password}`
        );
        if (data[0]) {
            console.log("User logged in!");
            localStorage.setItem("user", JSON.stringify(data[0]));
            dispatch(asyncCurrentUser());
        } else {
            console.log("Wrong Credentials!");
        }
    } catch (error) {
        console.log(error);
    }
};

export const asyncSignupUser = (user) => async (dispatch, getState) => {
    try {
        await axios.post("/users", user);
        console.log("User Registered!");
    } catch (error) {
        console.log(error);
    }
};

export const asyncUpdateUser = (id, user) => async (dispatch, getState) => {
    try {
        const { data } = await axios.patch(`/users/${id}`, user);
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(loginUser(data));
        console.log("User Updated!");
    } catch (error) {
        console.log(error);
    }
};

export const asyncLogoutUser = () => async (dispatch, getState) => {
    try {
        localStorage.removeItem("user");
        dispatch(logoutUser());
        console.log("User logged out!");
    } catch (error) {
        console.log(error);
    }
};

export const asyncDeleteUser = (id) => async (dispatch, getState) => {
    try {
        await axios.delete(`/users/${id}`);
        localStorage.removeItem("user");
        dispatch(logoutUser());
        console.log("User Deleted!");
    } catch (error) {
        console.log(error);
    }
};