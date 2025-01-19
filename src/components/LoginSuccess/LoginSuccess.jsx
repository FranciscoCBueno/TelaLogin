import './LoginSuccess.css'
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';

export default function LoginSucess () {

    const navigate = useNavigate();

    const handleBtnClick = () => {
        navigate('/login');
    }

    return (
        <div className="container">
            <Navbar className='navbar'></Navbar>
            <div className="message-container">
                <h1 className="success-text">Login realizado com sucesso!</h1>
                <button className='return-btn' onClick={handleBtnClick}>Retornar</button>
            </div>
            
        </div>
    );
}