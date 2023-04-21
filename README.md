# React Router 6
## Ejemplos de Router 6 basicos
- React nos permite crear SPA (Single Page Application), y mostrar varias vistas dentro de la misma página, sin embargo, tener navegación entre páginas, una URL específica para una vista o simplemente retroceder/avanzar en el historial de navegación son características que todo usuario debería poder hacer en un sitio web, React logra todo esto con ayuda de la librería React Router.

## React Router tiene tres paquetes:

react-router
react-router-native
react-router-dom

Haremos uso de los siguientes hooks: useParams y useNavegate.
## Componentes esenciales:

<BrowserRouter/> → Conecta nuestra aplicación a la URL del navegador, es decir mantiene la interfaz de usuario en sincronía con la URL del navegador mediante la API History de HTML5.
<Routes/> → Genera un árbol de rutas y a partir de este nos permite reemplazar la vista con el componente que coincide con la URL de nuestra barra de navegación y nos va a renderizar solamente dicho componente.
<Route/> → Representa una ruta en el árbol, necesita al menos las siguientes propiedades path y element, para representar una ruta.

##Creación del ambiente de desarrollo.
Crea una aplicación con React

npx create-react-app router-exercise cd router-exercise
npx create-react-app router-exercise
cd router-exercise
Posteriormente, necesitamos instalar react-router-dom a nuestro proyecto para hacer uso de sus componentes:

npm install react-router-dom
npm install react-router-dom

## Configuración del Router
//src > Router.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Router = () => {
  const Home = () => <h1>Home</h1>;
  const Pets = () => <h1>Pet List</h1>;
  const Layout = () => <h1>Layout</h1>;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;

## <Link /> 


##  Rutas Anidadas
