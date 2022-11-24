import "../Csss/Middletop.css";
import { useState } from "react";
const Middletop = () => {
  const [menu, setMenu] = useState([
    {
      id: "1",
      image: (
        <img
          src={require("../imagesT/ronaldo.jfif")}
          alt="nolodead"
          style={{ height: "30vh", width: " 15vw" }}
        />
      ),
      data: "Fifa World Cup 2022",
    },
    {
      id: "2",
      image: (
        <img
          src={require("../imagesT/ronaldo2.jfif")}
          alt="nolodead"
          style={{ height: "30vh", width: " 15vw" }}
        />
      ),
      data: "Fifa World Cup 2015",
    },
    {
      id: "3",
      image: (
        <img
          src={require("../imagesT/img3.jfif")}
          alt="nolodead"
          style={{ height: "30vh", width: " 15vw" }}
        />
      ),
      data: "Fifa World Cup 2022",
    },
    // {
    //   id: "4",
    //   image: (
    //     <img
    //       src={require("../imagesT/img4.jfif")}
    //       alt="nolodead"
    //       style={{ height: "30vh", width: " 15vw" }}
    //     />
    //   ),
    //   data: "Fifa World Cup 2010",
    // },
    // {
    //   id: "5",
    //   image: (
    //     <img
    //       src={require("../imagesT/img5.jfif")}
    //       alt="nolodead"
    //       style={{ height: "30vh", width: " 15vw" }}
    //     />
    //   ),
    //   data: "Fifa World Cup 2007",
    // },
    // {
    //   id: "6",
    //   image: (
    //     <img
    //       src={require("../imagesT/img3.jfif")}
    //       alt="nolodead"
    //       style={{ height: "30vh", width: " 15vw" }}
    //     />
    //   ),
    //   data: "Fifa World Cup 2005",
    // },
  ]);


  const handledelete= (ID) =>{
console.log("clicked");
  
  }

  // end of menu

  const [submenu, setSubmenu] = useState([
    {
      id: "1",
      image: (
        <img
          src={require("../imagesT/img5.jfif")}
          alt="nolodead"
          style={{ height: "10vh", width: " 15vw" }}
        />
      ),
      data: "Fifa World Cup 2021",
    },
    {
      id: "2",
      image: (
        <img
          src={require("../imagesT/img4.jfif")}
          alt="nolodead"
          style={{ height: "10vh", width: " 15vw" }}
        />
      ),
      data: "Fifa World Cup 2020",
    },
    {
      id: "3",
      image: (
        <img
          src={require("../imagesT/ronaldo.jfif")}
          alt="nolodead"
          style={{ height: "10vh", width: " 15vw" }}
        />
      ),
      data: "Fifa World Cup 2022",
    },
    {
      id: "3",
      image: (
        <img
          src={require("../imagesT/ronaldo.jfif")}
          alt="nolodead"
          style={{ height: "10vh", width: " 15vw" }}
        />
      ),
      data: "Fifa World Cup 2022",
    },
    {
      id: "3",
      image: (
        <img
          src={require("../imagesT/img3.jfif")}
          alt="nolodead"
          style={{ height: "10vh", width: " 15vw" }}
        />
      ),
      data: "Fifa World Cup 2022",
    },

    {
      id: "3",
      image: (
        <img
          src={require("../imagesT/ronaldo2.jfif")}
          alt="nolodead"
          style={{ height: "10vh", width: " 15vw" }}
        />
      ),
      data: "Fifa World Cup 2022",
    },
  ]);


  const handleDelete2 = (ID)=>{

    setSubmenu(
      submenu.filter((submenu) => submenu.id!==ID)
     )
    
  }

  return (
    <div>
      <div id="midt">
        {menu.map((m) => (
          <div className="card" id="cards">
            <div className="card-body">
              <p> {m.image}</p>
              <h5 className="card-title">{m.data}</h5>
{/* 
              <button className="btn btn-primary" onClick={()=>handledelete()}>
                button
              </button>  */}
            </div>
          </div>
        ))}

        <h1>
          More-----------------------------------------------------
        </h1>

        {submenu.map((sb) => (
          <div className="card" id="cards">
            <div className="card-body">
              <p> {sb.image}</p>
              <h5 className="card-title">{sb.data}</h5>

                <button className="btn btn-primary" onClick={() => handleDelete2(sb.id)}>button</button>   
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Middletop;
