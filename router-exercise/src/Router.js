//Primero si queremos proveer a toda nuestra aplicación de rutas tenemos que posicionar 
//al componente BrowserRouter como el componente 
//padre de todas nuestras rutas es decir este debe envolverlas de la siguiente manera:

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/link";
import Pets from "./components/pets";

const Router = () => {
    const Home = () => <h1>Home</h1>;
  //const Pets = () => <h1>Pet List</h1>;
  // const Layout = () => <h1>Layout</h1>;
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="pets" element={<Pets />} />
            <Route path="pets/:id" element={<h1>detalles</h1>} />
            <Route path="*" element={<h1>404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;

//Dentro de nuestro Router podemos generar todas las rutas que queramos solo necesitamos 
//hacer uso del componente Route agregarle al menos dos propiedades path y element

