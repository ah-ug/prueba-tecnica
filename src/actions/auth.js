import { types } from "../types/types";

export const startLogin = (email, password) => {
    return async(dispatch) => {
        await dispatch( login({
            email,
            password
        }) );
    }
}

export const startRegister = (name, email, password) => {
    return async(dispatch) => {
        dispatch(login(
            name,
            email,
            password
        ) )
    }
}

const login = (email, password) => ({
    type: types.authLogin,
    payload: {
        email,
        password
    }
})