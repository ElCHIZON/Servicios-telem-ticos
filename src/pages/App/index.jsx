//Importar librerias
import { useRoutes, BrowserRouter } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

// importar paginas
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import NotFound from "../NotFound";
import NavigationBar from "../../components/Navbar";

const AppRoutes = () => {

  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/about', element: <About/>},
    {path: '/contact', element: <Contact/>},
    {path: '*', element: <NotFound/>},
  ]);
  return routes;
}



function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes/>
        <NavigationBar/>
      </BrowserRouter>
    </> 
  );
}
export default App