import './App.css';
import { Outlet } from "react-router-dom";

//Renderiza o Outlet, que é responsável por renderizar o componente filho da rota correspondente
function App() {
  return (
    <>
      <Outlet/>
    </>
  );
}

export default App;
