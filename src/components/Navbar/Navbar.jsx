import './Navbar.css'
import logo from '../../assets/avati-logo.png'
import { useNavigate } from 'react-router-dom';

export function Navbar () {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
        window.location.reload(false);
    };

    return (
        <div className="navbar">
            <img src={logo} alt="logo" className='logo' onClick={handleClick}/>
            <div className="about"><a href="https://www.avati.com.br/" target='_blank' rel='noreferrer'>Sobre nós</a></div>
        </div>
    );
}