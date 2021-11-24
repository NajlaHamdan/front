import "./App.css";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import { Route, Routes } from "react-router";
import Register from "./components/Register";
import Nav from "./components/Nav";
import Profile from "./components/Profile"
import Meals from "./components/Meals";
import Display from "./components/Display";
function App() {
  return (
    <div>
      {/* <Meals/> */}
       <Nav/>
      <Routes>
      <Route exact path="/" element={<LogIn />} />
        <Route exact path="/Meals" element={<Meals />} />
        <Route exact path="/Description/:id/:meal" element={<Meals />} />
        {/*<Route  path="/Home/:id" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/profile" element={<Profile />} />*/}
      </Routes> 
    </div>
  );
}

export default App;
