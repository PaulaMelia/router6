import { useParams } from "react-router-dom";
const Product = () => {
 const { id } = useParams();
 return <div> La id es: {id}</div>
};


export default Product;