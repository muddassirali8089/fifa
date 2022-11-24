import "../Csss/Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
    return (  

        <div id="Footer">
             <h1 id="f"> FIFA</h1>
            

<div className="btn">

<h1>EXPLORE</h1>

            <Link to = "/Compitation">
            
             <button className=" btn btn-dark">compitation</button>
             </Link>
             <br/>
             <br/>
             <button className=" btn btn-dark">Technical</button>
             <br/>
             <br/>
             <button className=" btn btn-dark">contact</button>
             <br/>
             <br/>

             </div>
        </div>
    );
}
 
export default Footer;
