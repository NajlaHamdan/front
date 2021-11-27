import "./App.css";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import { Route, Routes } from "react-router";
import Register from "./components/Register";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Meals from "./components/Meals";
import Description from "./components/Description";
import LogOut from "./components/LogOut";
function App() {
  return (
    <div>
      {/* <Meals/> */}
      {/* <Nav /> */}
    
      <Routes>
        <Route exact path="/logIn" element={<LogIn />} />
        <Route exact path="/LogOut" element={<LogOut />} />
        <Route exact path="/meals" element={<Meals />} />
        <Route exact path="/description" element={<Description />} />
        <Route path="/home/:id" element={<Home />} />
        <Route exact path="/" element={<Register />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
