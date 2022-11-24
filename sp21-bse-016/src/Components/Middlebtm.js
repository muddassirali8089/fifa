import { useState } from "react";
import "../Csss/Middletop.css";


const Middlebtm = () => {
    const [menu, setMenu] = useState([
        {
          id: "1",
          image: (
            <img
              src={require("../flag/brazeel.png")}
              alt="nolodead"
              style={{ height: "8vh", width: " 20vw" }}
            />
          ),
          data: "1841.5",
        },
        {
          id: "2",
          image: (
            <img
              src={require("../flag/france.png")}
              alt="nolodead"
              style={{ height: "8vh", width: " 20vw" }}
            />
          ),
          data: "1781.7",
        },
        {
          id: "3",
          image: (
            <img
              src={require("../flag/germany.png")}
              alt="nolodead"
              style={{ height: "8vh", width: " 20vw" }}
            />
          ),
          data: "1861.2",
        },
        {
          id: "4",
          image: (
            <img
              src={require("../flag/pak.png")}
              alt="nolodead"
              style={{ height: "8vh", width: " 20vw" }}
            />
          ),
          data: "1889.58",
        },
        {
          id: "5",
          image: (
            <img
              src={require("../flag/india.png")}
              alt="nolodead"
              style={{ height: "8vh", width: " 20vw" }}
            />
          ),
          data: "1925.5",
        },
        {
          id: "6",
          image: (
            <img
              src={require("../flag/amarica.jfif")}
              alt="nolodead"
              style={{ height: "8vh", width: " 20vw" }}
            />
          ),
          data: "19875.5",
        },
      ]);

      const handledelete = () =>{

      }

  return (
    


    <div id="midt">

        {menu.map((m) => (
          <div className="card" id="cards">
            <div className="card-body">
              <p> {m.image} {m.data}</p>
              

               {/* <button className="btn btn-primary" onClick={()=>handledelete()}>
                button
              </button>  */}
            </div>
          </div>
        ))}

        </div>
  );
};

export default Middlebtm;
