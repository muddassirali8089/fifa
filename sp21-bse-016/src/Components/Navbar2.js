import { Link } from "react-router-dom";
import "../Csss/Navbar2.css";
import"../Csss/Hour.css";
const Navbar2 = () => {
    return (  
        
<div id="nav2">

<ul>


<li>



<div class="dropdown">
        <a class="dropbtn">LEGEL</a>
         <div class="dropdown-content">
         
          <Link to={"/PRIVACY"}>
          PRIVACY
          </Link>
          <Link to={"/TERMS"}>

          
          TERMS

          </Link>
          {/* <a href="#">Schedule</a>
          <a href="#">Month view</a>
          <a href="#">Season View</a> */}
        </div> 
      </div>

      </li>

      <div class="dropdown">
        <a class="dropbtn">ABOUT FIFA</a>
        <div class="dropdown-content">
          <a href="#">Results</a>
          <a href="#">Live score home</a>
          <a href="#">Schedule</a>
          <a href="#">Month view</a>
          <a href="#">Season View</a>
        </div>
      </div>

      <div class="dropdown">
        <a class="dropbtn">WomanFootball</a>
        <div class="dropdown-content">
          
          <a href="#">Results</a>
          <a href="#">Live score home</a>
          <a href="#">Schedule</a>
          <a href="#">Month view</a>
          <a href="#">Season View</a>
        </div>
      </div>

      
      <div class="dropdown">
        <a class="dropbtn">Social impect</a>
        <div class="dropdown-content">
          <a href="#">Results</a>
          <a href="#">Live score home</a>
          <a href="#">Schedule</a>
          <a href="#">Month view</a>
          <a href="#">Season View</a>
        </div>
      </div>

      
      <div class="dropdown">
        <a class="dropbtn">Live Score</a>
        <div class="dropdown-content">
          <a href="#">Results</a>
          <a href="#">Live score home</a>
          <a href="#">Schedule</a>
          <a href="#">Month view</a>
          <a href="#">Season View</a>
        </div>
      </div>
      


      </ul>

      
      

      
      
      


    
    
   
     
   
   
   
   
   </div>

         
      
    );
}
 
export default Navbar2;