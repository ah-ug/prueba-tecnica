import React from 'react'

export const Home = () => {
    return (
        <>
            <div className="navbar navbar-dark bg-dark mb-4">
                <h1>Home</h1>
                <span> Juanito </span>
                <button className="btn btn-outline-danger">
                    <i className="fas fa-sign-out-alt"> </i>
                    Logout
                </button>
            </div>
            <h3> Hola Juanito </h3>
        </>
    )
}
