import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        if (res.status === 200 && res.data) {
            localStorage.setItem('user', JSON.stringify(res.data))
            dispatch(loginSuccess(res.data));
        }
    } catch (err) {
        dispatch(loginFailure());
    }
};