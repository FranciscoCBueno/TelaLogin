import './LoginSuccess.css'
import { useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';

export default function LoginSucess () {

    //Definição dos hooks de navegação e localização
    const navigate = useNavigate();
    const location = useLocation();
    //Recupera o email passado por parâmetro na rota
    const email = location.state?.email || '';

    //Redirecionamento de volta para a tela de login
    const handleBtnClick = () => {
        navigate('/login');
    }

    return (
        <div className="container">
            <Navbar className='navbar'></Navbar>
            <div className="message-container">
                <h1 className="success-text">Bem-vindo(a), {email}!</h1>
                <button className='return-btn' onClick={handleBtnClick}>Sair</button>
            </div>
        </div>
    );
}