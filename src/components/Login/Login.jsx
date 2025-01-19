import './Login.css'
import { Navbar } from '../Navbar/Navbar';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePassword = (password) => {
        if (password.trim().length >= 6) {
            return true;
        } else {
            return false;
        }
    };

    const handleEmailBlur = () => {
        if (!email) {
            setErrors(prevErrors => ({ ...prevErrors, email: 'Campo obrigatório' }));
        } else if (!validateEmail(email)) {
            setErrors(prevErrors => ({ ...prevErrors, email: 'E-mail inválido' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, email: '' }));
        }
    };

    const handlePasswordBlur = () => {
        if (!password) {
            setErrors(prevErrors => ({ ...prevErrors, password: 'Campo obrigatório' }));
        } else if (!validatePassword(password)) {
            setErrors(prevErrors => ({ ...prevErrors, password: 'A senha deve ter 6 caracteres ou mais' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, password: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if ((errors.email.length === 0 && errors.password.length === 0) && (email !== '' && password !== '')) {
            navigate('/loginsuccess');
        } else {
            Swal.fire({
                title: 'Erro!',
                text: 'Preencha os campos corretamente',
                icon: 'error',
                background: 'rgb(60, 60, 60)',
                color: '#fff',
                confirmButtonColor: '#e9f035',
                confirmButtonText: '<span style="color: black">Ok<span/>'
            });
        }
    };

    const handleForgotPassword = () => {
        navigate('/forgotpassword');
    };

    return (
        <div className='container'>
            <Navbar className='navbar'></Navbar>
            <div className='form-container' onSubmit={handleSubmit}>
                <form className='login-form'>
                    <h2 className='login-text'>Login</h2>
                    <div className='input-container'>
                        <input type="email" value={email} name='email'
                        className={`email ${errors.email ? 'input-error' : ''}`} placeholder='E-mail *'
                        onChange={(e) => setEmail(e.target.value)} onBlur={handleEmailBlur} />
                        {errors.email && <div className='error-message'>{errors.email}</div>}
                    </div>
                    <div className='input-container'>
                        <input type="password" value={password} name='password'
                        className={`password ${errors.password ? 'input-error' : ''}`} placeholder='Senha *'
                        onChange={(e) => setPassword(e.target.value)} onBlur={handlePasswordBlur} />
                        {errors.password && <div className='error-message'>{errors.password}</div>}
                    </div>
                    <div className="options">
                        <div className='keep-conected'><input type="checkbox" />
                            <div className="keep-conected-text">Mantenha-me conectado</div>
                        </div>
                        <div className='forgot-password' onClick={handleForgotPassword}>Esqueci minha senha</div>
                    </div>
                    <button type='submit' className='login-btn'>Entrar</button>
                    <div className='sign-in'>Cadastre-se agora</div>
                </form>
            </div>
        </div>
    );
}