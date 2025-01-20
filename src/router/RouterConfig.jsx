import { Navigate, createBrowserRouter } from 'react-router-dom';
import Login from '../components/Login/Login';
import LoginSucess from '../components/LoginSuccess/LoginSuccess';
import App from '../App'
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';

export const Rotas = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children: [
            {
                //Rota raiz, redireciona para a tela de login
                index: true,
                element: <Navigate to="/login" replace/>
            },
            {
                path:"/login",
                element: <Login/>
            },
            {
                path:"/loginsuccess",
                element: <LoginSucess/>
            },
            {
                path:"/forgotpassword",
                element: <ForgotPassword/>
            }
        ]
    }
])
