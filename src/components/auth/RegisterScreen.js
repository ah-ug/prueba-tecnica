import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegister } from '../../actions/auth';
import { setError, removeError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
/* 
    name: 'Hernando',
    email: 'nando@gmail.com',
    password: '123456',
    password2: '123456',
*/  
    const dispatch = useDispatch();

    const { msgError } = useSelector(state => state.ui); 

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = ( e ) => {
        e.preventDefault();

        if( isFormValid() ) {
            console.log(name, email, password, password2);

            dispatch(startRegister(name, email, password));
        } else {
            console.log('f');
        }
    }

    const isFormValid = () => {
        if ( name.trim().length === 0 ) {
            dispatch( setError( 'El nombre es requerido'));
            console.log('f1');
            return false;
        } else if ( !validator.isEmail( email ) ){
            dispatch( setError('Email no válido') );
            console.log('f2');
            return false;
        } else if ( password !== password2 || password.length < 5 ) {
            dispatch( setError('Password debe tener al menos 6 caracteres y deben coincidir') );
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
                    <h3 className="auth__title">Registro</h3>    

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
                        placeholder="Nombre"
                        name="name"
                        className="form-control"
                        autoComplete="off"
                        value={name}
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
                        placeholder="Contraseña"
                        name="password"
                        className="form-control"
                        value={password}
                        onChange={handleInputChange}
                    />

                    <input
                        type="password"
                        placeholder="Confirme Contraseña"
                        name="password2"
                        className="form-control"
                        value={password2}
                        onChange={handleInputChange}
                    />

                    <button
                        type="submit"
                        className="btn btn-primary btn-block mb-5"
                    >
                        Registrar
                        </button>
                    
                    <div className="form-control">
                        <Link
                            to="/auth/login"
                            className="link"
                        >
                            Ya estás registrado?
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )

}