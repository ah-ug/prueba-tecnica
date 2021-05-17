import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import Logo from '../../images/logoStardewHome.png';

export const Home = () => {
    const dispatch = useDispatch();

    const { name, lastName, userName, email } = useSelector((state) => state.auth);
    const handleLogout = () => {
        dispatch(startLogout());
    };
    
    return (
        <>
            <div className="container">
                <div className='row logo-home'>
                        <img src={Logo} id="logo-home" alt='LogoStardew'/>
            </div>
            <div className="container main-body">
                <div className="row gutters-sm">
                    <div className="col-md-3 mb-3">
                        <div className="row logout">
                            <button
                                className="btn btn-outline-danger btn-logout"
                                onClick={handleLogout}
                            >
                                <i className="fas fa-sign-out-alt"> </i>
                                Logout
                            </button>
                        </div>
                        <div className="row card profile">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img
                                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                        alt="Admin"
                                        className="rounded-circle"
                                        width="150"
                                    />
                                </div>
                                <div className="mt-3">
                                    <h4 className='home'> { userName } </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row home">
                                    Biography
                                </div>
                                <div className="row">
                                    <div className="row">
                                    <div className="col-sm-1">
                                        <i className="fas fa-id-card"></i>
                                    </div>
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Full Name</h6>
                                    </div>
                                        <div className="col-sm-8 text-secondary"> {name } {lastName}</div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-1">
                                            <i className="fas fa-at" size="2x"></i>
                                        </div>
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-8 text-secondary"> { email } </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-1">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Phone</h6>
                                        </div>
                                        <div className="col-sm-8 text-secondary">
                                            (239) 816-9029
                                        </div>
                                    </div>

                                    <hr />

                                    <div className="row">
                                        <div className="col-sm-1">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-8 text-secondary">
                                            Bay Area, San Francisco, CA
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row gutters-sm">
                                <div className="col-sm-11 mb-4">
                                    <div className="card h-100">
                                        <div className="card-body">
                                        <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                        <small>Web Design</small>
                                        <div className="progress mb-3" >
                                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small>Website Markup</small>
                                        <div className="progress mb-3">
                                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small>One Page</small>
                                        <div className="progress mb-3" >
                                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small>Mobile Template</small>
                                        <div className="progress mb-3" >
                                            <div className="progress-bar bg-primary" role="progressbar"  aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small>Backend API</small>
                                        <div className="progress mb-3" >
                                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};
