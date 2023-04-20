import  Link  from '../components/link';
import { useNavigate } from "react-router-dom";


const Home=()=> {
const navigate = useNavigate();
return <div>
     <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/page2">Page2</Link></li>
        <li><Link to="/product">Product</Link></li>
    </ul>;
    <button onClick={navigate(process.env.PUBLIC_URL+'/page2')}>Pulsar</button>
</div>
}
export default Home;