import "./App.css";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import { Route, Routes } from "react-router";
import Register from "./components/Register";
import Nav from "./components/Nav";
import Profile from "./components/Profile"
import Meals from "./components/Meals";
import Description from "./components/Description";
function App() {
  return (
    <div>
      {/* <Meals/> */}
       <Nav/>
      <Routes>
      <Route exact path="/" element={<LogIn />} />
        <Route exact path="/Meals" element={<Meals />} />
        <Route exact path="/Description" element={<Description />} />
        {/*<Route  path="/Home/:id" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/profile" element={<Profile />} />*/}
      </Routes> 
    </div>
  );
}

export default App;
