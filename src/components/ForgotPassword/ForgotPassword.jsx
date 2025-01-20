import './ForgotPassword.css'
import { Navbar } from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function ForgotPassword() {

    //Definição do state
    const [email, setEmail] = useState('');
    //Hook de navegação
    const navigate = useNavigate();

    //Ao clicar no botão de envio, verifica se o campo de email está preenchido e se o email é válido
    //Caso contrário, exibe uma mensagem de erro
    const handleSubmitClick = () => {
        if (!email) {
            Swal.fire({
                title: 'O e-mail não pode estar em branco',
                icon: 'error',
                background: 'rgb(60, 60, 60)',
                color: '#fff',
                confirmButtonColor: '#e9f035',
                confirmButtonText: '<span style="color: black">Retornar<span/>'
            });
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            Swal.fire({
                title: 'E-mail inválido',
                icon: 'error',
                background: 'rgb(60, 60, 60)',
                color: '#fff',
                confirmButtonColor: '#e9f035',
                confirmButtonText: '<span style="color: black">Retornar<span/>'
            });
        } else {
            Swal.fire({
                title: 'Enviado',
                text: 'Se este e-mail estiver cadastrado, você receberá instruções para redefinição de senha',
                icon: 'success',
                background: 'rgb(60, 60, 60)',
                color: '#fff',
                confirmButtonColor: '#e9f035',
                confirmButtonText: '<span style="color: black">Retornar<span/>'
            }).then(function() {
                navigate('/login');
            });
        }
    };

    //Cancela a redefinição de senha e retorna para a tela de login
    const handleCancelClick = () => {
        navigate('/login');
    };

    return (
        <div className="container">
            <Navbar className='navbar'></Navbar>
            <div className="forgot-password-container">
                <h1 className='title'>Insira seu e-mail para recuperação de senha</h1>
                <input className='email' type="text" name='email' placeholder='E-mail'
                value={email} onChange={(e) => setEmail(e.target.value)}/>
                <div className="buttons-container">
                    <button className='submit-btn' onClick={handleSubmitClick}>Enviar</button>
                    <button className='cancel-btn'onClick={handleCancelClick}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}