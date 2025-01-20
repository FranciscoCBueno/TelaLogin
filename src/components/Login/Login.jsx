import './Login.css'
import { Navbar } from '../Navbar/Navbar';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Login() {

    //Definição dos states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });
    const [keepConnected, setKeepConnected] = useState(false);
    //Hook de navegação
    const navigate = useNavigate();

    //Ao montar o componente, verifica se há dados salvos no localStorage e preenche os campos
    //Nota: o localStorage não é uma forma segura para armazenagem de dados, e está sendo utilizado
    //apenas para fins de demonstração.
    //A forma correta seria fazer a integração com um sistema back-end e utilizar cookies ou tokens JWT
    //para manter o usuário conectado.
    useEffect(() => {
        const savedEmail = localStorage.getItem('email');
        const savedPassword = localStorage.getItem('password');
        if (savedEmail && savedPassword) {
            setEmail(savedEmail);
            setPassword(savedPassword);
            setKeepConnected(true);
        }
    }, []);

    //Muda o estado do checkbox de "Mantenha-me conectado"
    //Remove os dados salvos no localStorage se o checkbox for desmarcado
    const handleKeepConnected = (e) => {
        setKeepConnected(e.target.checked);
        if (!e.target.checked) {
            localStorage.removeItem('email');
            localStorage.removeItem('password');
        }
    };

    //Validação do email
    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    //Validação da senha
    const validatePassword = (password) => {
        if (password.trim().length >= 6) {
            return true;
        } else {
            return false;
        }
    };

    //Ao sair do campo do email, verifica se o campo está preenchido e se o email é válido
    //Caso contrário, salva uma mensagem de erro no state errors
    const handleEmailBlur = () => {
        if (!email) {
            setErrors(prevErrors => ({ ...prevErrors, email: 'Campo obrigatório' }));
        } else if (!validateEmail(email)) {
            setErrors(prevErrors => ({ ...prevErrors, email: 'E-mail inválido' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, email: '' }));
        }
    };

    //Ao sair do campo da senha, verifica se o campo está preenchido e se a senha tem pelo menos 6 caracteres
    //Caso contrário, salva uma mensagem de erro no state errors
    const handlePasswordBlur = () => {
        if (!password) {
            setErrors(prevErrors => ({ ...prevErrors, password: 'Campo obrigatório' }));
        } else if (!validatePassword(password)) {
            setErrors(prevErrors => ({ ...prevErrors, password: 'A senha deve ter 6 caracteres ou mais' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, password: '' }));
        }
    };

    //Ao submeter as informações de login, verifica se os campos estão preenchidos corretamente
    //Caso contrário, exibe uma mensagem de erro
    //Se o checkbox estiver marcado, salva os dados no localStorage
    //Redireciona para a página de sucesso de login
    const handleSubmit = (e) => {
        e.preventDefault();
        if ((errors.email.length === 0 && errors.password.length === 0) && (email !== '' && password !== '')) {
            if (keepConnected) {
                localStorage.setItem('email', email);
                localStorage.setItem('password', password);
            }
            navigate('/loginsuccess', { state: { email } });
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

    //Redirecionamento para a página de recuperação de senha
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
                        <div className='keep-conected'>
                            <input type="checkbox" checked={keepConnected} onChange={handleKeepConnected}/>
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