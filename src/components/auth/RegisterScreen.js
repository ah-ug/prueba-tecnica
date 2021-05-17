import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import validator from 'validator';
import { startRegister } from '../../actions/auth';
import { setError, removeError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
import Logo from '../../images/logoStardew.png';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui); 

    const [formValues, handleInputChange] = useForm({
        userName: 'Caupo',
        name: 'Caupolican',
        lastName: 'Urra',
        email: 'caupo@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const { userName, name, lastName, email, password, password2 } = formValues;

    const handleRegister = ( e ) => {
        e.preventDefault();

        if( isFormValid() ) {
            dispatch(startRegister(userName, name, lastName, email, password, password2 ) );
            return Swal.fire('Success', 'Creation has been successful', 'success' );
        } else {
            console.log('f');
        }
    }

    const isFormValid = () => {
        if ( userName.trim().length === 0 ) {
            dispatch( setError( 'username is required'));
            console.log('falta username');
            return false;
        }else if ( name.trim().length === 0 ) {
            dispatch( setError( 'name is required'));
            console.log('f1');
            return false;
        } else if ( !validator.isEmail( email ) ){
            dispatch( setError('email not valid') );
            console.log('f2');
            return false;
        } else if ( password !== password2 || password.length < 5 ) {
            dispatch( setError('Password must be at least 6 characters and match each other') );
            console.log('f3');
            return false;
        }

        dispatch( removeError() );
        return true;
    }

    return (
        <>
            <div className='limiter container-register'>

                <form
                    onSubmit={handleRegister}
                    className="form-group"
                >   
                    <div className='logo'>
                        <img src={Logo} alt='LogoStardew' height='140px'/>
                    </div>

                    { 
                        msgError &&
                        ( 
                            <div className="auth__alert-error">
                                { msgError}
                            </div>
                        )
                    } 

                    {/* <label for="Name">Nombre</label> */}
                    
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        name="userName"
                        value={ userName }
                        onChange={handleInputChange}
                    />

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        autoComplete="off"
                        value={name}
                        onChange={handleInputChange}
                    />

                    <input
                        type="text"
                        placeholder="Lastname"
                        name="lastName"
                        className="form-control"
                        autoComplete="off"
                        value={lastName}
                        onChange={handleInputChange}
                    />



                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        className="form-control"
                        autoComplete="off"
                        value={email}
                        onChange={handleInputChange}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="form-control"
                        value={password}
                        onChange={handleInputChange}
                    />

                    <input
                        type="password"
                        placeholder="Confirm password"
                        name="password2"
                        className="form-control"
                        value={password2}
                        onChange={handleInputChange}
                    />

                    <button
                        type="submit"
                        className="btn btn-primary btn-block mb-5"
                    >
                        Register
                        </button>
                    
                    <div className="link">
                        <Link
                            to="/"
                            className="link"
                        >
                            Already register?
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )

}