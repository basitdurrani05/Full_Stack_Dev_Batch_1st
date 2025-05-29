import {BrowserRouter as Router, Routes,Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Service } from "./pages/Service";
import { About } from "./pages/About";
import "./App.css";


function App() {
  return (


    /*

    Routing :  

    Step 1 : Router

    Step 2 : Routes

    Step 3 :  Route

    Step 4 : Link
    
    */


    <div className="App">



      <Router>


        <div className="nav-parents">


          <div className="nav-child">


            <Link to="/">Home</Link>

          <Link to="/Service">Service</Link>

          <Link to="/About">About</Link>



          </div>




        </div>



        



        <Routes>


          <Route path="/" element={<Home/>}/>

            <Route path="/Service" element={<Service/>}/>

            <Route path="/About" element={<About/>}/>
          



        </Routes>








      </Router>





    </div>


    

   
    
  );
}

export default App;
