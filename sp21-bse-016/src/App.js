import { Route, Routes } from "react-router-dom";
import Compitation from "./Components/Compitation";
import Grid from "./Components/Grid";
import Navbar from "./Components/Navbar";
import Result from "./Components/Result";
import Signin from "./Components/Signin";
import Terms from "./Components/Terms";
import Ticket from "./Components/Ticket";

function App() {
  return (
    <div className="App">
      <Routes>
  <Route path="/SignIn" element = {<Signin />}/>
  <Route path="/Ticket" element={<Ticket />}/>
  <Route path="/Compitation" element={<Compitation/>}/>
  <Route path="//PRIVACY" element={<Result/>}/>
  <Route path="/TERMS" element={<Terms/>}/>
  <Route path="/" element = {<Grid/>}/>
  

</Routes>






    


    </div>
  );
}

export default App;
