import './App.css';
import NavBar from "./components/Navigation.jsx";
import Sweets from "./components/Sweets.jsx";
import Home from "./components/Home.jsx";
import HotDrinks from "./components/HotDrinks.jsx";
import WesternFoods from "./components/WesternFoods.jsx";
import OrientalFoods from "./components/OrientalFoods.jsx";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={
          <Home/>
        } />
        <Route path="/westernFoods" element={
            <WesternFoods/>
          } />
          <Route path="/orientalFoods" element={
              <OrientalFoods/>
          } />
          <Route path="/drinks" element={
              <HotDrinks/>
          } />
          <Route path="/sweets" element={
              <Sweets/>
          } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
