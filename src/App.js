import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";
import AddStudent from "./components/AddStudent";
import WelcomePage from "./components/WelcomePage";
import SignUp from "./components/SignUp";
import AddUser from "./components/AddUser";
import Sidenav from "./components/Sidenav";
import BasicTable from "./components/BasicTable";
import Admin from "./components/Admin";
import Home from "./components/Home";
import UpdateUser from "./components/UpdateUser";
import Logout from "./components/Logout";
import StuTable from "./components/StuTable";
import UpdateStudent from "./components/UpdateStudent";
import Student from "./components/Student";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/" element={<WelcomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AddStudent" element={<AddStudent />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/AddUser" element={<AddUser />} />
        <Route path="/Sidenav" element={<Sidenav />}></Route>
        <Route path="/BasicTable" element={<BasicTable />}></Route>
        <Route path="/Admin" element={<Admin />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/UpdateUser/:id" element={<UpdateUser />} />
        <Route path="/Logout" element={<Logout />}></Route>
        <Route path="/StuTable" element={<StuTable />}></Route>
        <Route path="/UpdateStudent/:id" element={<UpdateStudent />}></Route>
        <Route path="/Student" element={<Student />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
