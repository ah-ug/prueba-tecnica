import { types } from "../types/types";

/* 
    {} // no autenticado
    {
        uid: jdkfjadf
        name: 'arturo'

    }
*/

export const authReducer = ( state = {}, action ) => {
    switch ( action.type ) {
        case types.authLogin:
            return {
                email: action.payload.email,
                password: action.payload.password
            }
        
        case types.authLogout:
            return  {}
        
        case types.authRegister:
            return {
                ...state
            }
        
        default:
            return state;
    }
}