import React from 'react';
import validator from 'validator';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterEmaiPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

        const [formValues, handleInputChange] = useForm({
        name: 'Juan',
        email: 'asdfadsf@something.com',
        password: '11341342',
        password2: '11341342'
        });
        const {email, name, password, password2} = formValues;
        const dispatch = useDispatch();
        const {msgError} = useSelector( state => state.ui );
        console.log(msgError);

        const handleRegister = (e) => {
            e.preventDefault();
            if (isFormValid()){
                dispatch(startRegisterEmaiPasswordName(email,password,name));
            }
        }
        const isFormValid = ()=>{
            if( name.trim().length === 0){
                console.log('Name is required');
                dispatch(setError('Name is required'));
                return false;
            }else if (!validator.isEmail(email)){
                console.log('Email is not valid')
                dispatch(setError('Email is not valid'))
                return false;
            } else if (password !== password2 || password.length < 5){
                console.log('Password should match and be more than 6 characters');
                dispatch(setError('Password should match and be more than 6 characters'));
                return false;
            }
            dispatch(removeError());
            return true;
        }

    return (
        <>
            <h3 className="aut__title mb-5">Register</h3>
            <form onSubmit={handleRegister} className="animate__animated animate__fadeIn animate__faster">
                {
                    msgError && (
                        <div className='auth__alert-error'>{msgError}</div>
                    )
                }
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    className="auth__input"
                    autoComplete="off"
                    />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    className="auth__input"
                    autoComplete="off"
                    />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    className="auth__input"
                    />
                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                    className="auth__input"
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>
                
                <Link
                    to="/auth/login"
                    className="link "
                >
                    Already registered?
                </Link>
            </form>
        </>
    )
}
