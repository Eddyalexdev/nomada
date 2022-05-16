import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Room from "./pages/Room";
import Rooms from "./pages/Rooms";
import Admin from "./pages/admin/Index";
import AdminLogin from './pages/admin/Login';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms/:id" element={<Room />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/admin" element={<Admin />}>
          </Route>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="*" element={ <h1>404 page not found</h1> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
