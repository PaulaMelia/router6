//1.descargar en terminal :npm i react-router-dom
//2.Configuración básica
//3. Las paginas son componentes que tenemos que crear, creamos carpeta page fuera

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Page2 from "../pages/page2";
import Product from "../pages/product";

const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route path={process.env.PUBLIC_URL}>
				<Route index element={<Home />} />
				<Route path="page2/" element={<Page2 />} />
				<Route path="product/bicicletas" element={<Product />} />
				{/* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
				<Route path="*" element={<div>404</div>} />
			</Route>
		</Routes>
	</BrowserRouter>
);

export default Router;
