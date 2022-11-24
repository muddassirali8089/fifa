import "../Csss/Grid.css";

import Navbar from "../Components/Navbar"
import Navbar2 from "../Components/Navbar2";
import Middletop from "./Middletop";
import Aside from "./Aside";
import Middlebtm from "./Middlebtm";
import Footer from "./Footer";
const Grid = () => {
    return ( 

        <div>

        
        <div id="navbar">

            <section id="top">
              <Navbar />
            </section>

            <section id="btm">
                <Navbar2 />
            </section>
            </div> 
 {/* end of navbar  */}

            <div id = "middle" className="row">

                    <div id="Aside" className="col-3">
                       
                        <Aside />
                    </div> 
 {/* // end of Aside */}




                    <div id="rightside" className="col-9">
  
                        <section id="righttop" >
                            
                            <Middletop / >

                        </section> 
     {/* // end of right top */}

                        <section id="rightbtm" >

                           <Middlebtm />

                        </section> 
     {/* // right btm of top section */}

                    </div> 
      {/* end of right side main div */}



                    {/* <div id="Aside2" className="col-3">

                        <h1>
                            i al alkjfkajsg
                        </h1>
                    </div> */}

                    

            </div> 
 {/* // end of main main middle div */}

        
        <div className="row" id="footer">
            <Footer />
        </div>

        </div>

     );
}
 
export default Grid;