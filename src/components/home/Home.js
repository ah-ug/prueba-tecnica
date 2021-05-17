import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";

export const Home = () => {
    const dispatch = useDispatch();
    const { name, lastName, userName, email } = useSelector((state) => state.auth);
    console.log(name, lastName, userName, email);
    const handleLogout = () => {
        dispatch(startLogout());
    };
    
    return (
        <>
            <div className="container main-body">
                
                {/* <h3 className="title-home"> Stardew Valley </h3> */}

                <div className="row gutters-sm">
                    <div className="col-md-3 mb-3">
                        <button
                            className="btn btn-outline-danger btn-logout"
                            onClick={handleLogout}
                        >
                            <i className="fas fa-sign-out-alt"> </i>
                            Logout
                        </button>
                        <div className="card profile">
                            <div className="card-body ">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img
                                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                        alt="Admin"
                                        class="rounded-circle"
                                        width="150"
                                    />

                                    <div className="mt-3">
                                        <h4 className='home'> { userName } </h4>
                                        {/* <button className="btn btn-primary">Follow</button>
                                        <button className="btn btn-outline-primary">Message</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/*  <div className="card mt-3">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap"></li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap"></li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap"></li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap"></li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap"></li>
                            </ul>
                        </div> */}
                    </div>
                    <div className="col-md-9">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row home">
                                    Biografy
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Full Name</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary"> {name } {lastName}</div>
                                </div>
                                
                                <hr />
                                
                                <div className="row">
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Email</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            { email }
                                        </div>
                                    </div>

                                    <hr />
                                        
                                    <div className="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Phone</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            (239) 816-9029
                                        </div>
                                    </div>

                                    <hr />

                                    <div className="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Address</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            Bay Area, San Francisco, CA
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row gutters-sm">
                                {/* <div className="col-sm-6 mb-3">
                                    <div className="card h-100">
                                        <div className="card-body"></div>
                                    </div>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <div className="card h-100">
                                        <div className="card-body"></div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
