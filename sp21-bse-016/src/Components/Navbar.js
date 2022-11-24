
import { Link } from "react-router-dom";
import "../Csss/Navbar.css";
const Navbar = () => {
    return ( 
 
      <nav>

      <Link to ='/' style={{textDecoration:'none'}}>
      <div className='logo'><h1> FIFA</h1></div>
      </Link>
     <ul>
     
     
     
       <Link to= "Store">
       
       <li>  <button className="btn btn-light" type="button">Store</button></li>
       </Link>
       <Link to ="/Ticket">
       
       <li>  <button className="btn btn-light" type="button">Ticket</button> </li>
       </Link>
       
       <Link to="/SignIn">
       <li> <button className="btn btn-light" type="button">SignIn</button></li>
       </Link>
     
 
     
       {/* <Link to="RegistrationForm">
       <li>  <button className="btn btn-light" type="button">SignUp</button></li>
       </Link> */}
      
     
       
     
     </ul>
         
             </nav>
         
     );
}
 
export default Navbar;