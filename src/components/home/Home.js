import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const Home = () => {

    const dispatch = useDispatch();
    const { name } = useSelector(state => state.auth)   
    const handleLogout = () => {
        dispatch(startLogout());
    }
    return (
        <>
            <div className="navbar navbar-dark bg-dark mb-4">
                <h1>Home</h1>
                <span> Juanito </span>
                <button 
                    className="btn btn-outline-danger"
                    onClick={ handleLogout }
                >
                    <i className="fas fa-sign-out-alt"> </i>
                    Logout
                </button>
            </div>
            <h3> Hola { name } </h3>
        </>
    )
}
