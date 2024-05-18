import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import {Studentdata} from "./pages/Studentdata";
import {Register} from "./pages/Register";
import {Login} from "./pages/Login";
import {Contact} from "./pages/Contact";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/footer/Footer";
import {Logout} from "./pages/Logout";
import { AdminLayout } from "./components/layouts/Admin-Layout";
import { AdminUsers } from "./pages/Admin-Users";
import { AdminContacts } from "./pages/Admin-Contacts";
import { AdminStudents } from "./pages/Admin-Students";
import {AdminUpdate } from "./pages/Admin-Update";
import { StudentUpdate } from "./pages/Student-Update";

const App = () => {
  return (
  <>
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/"  element={<Home />}/>
    <Route path="/register"  element={<Register />}/>
    <Route path="/login"  element={<Login />}/>
    <Route path="/student"  element={<Studentdata />}/>
    <Route path="/contact"  element={<Contact/>}/>
    <Route path="/logout"  element={<Logout/>}/>
    <Route path="/admin" element={<AdminLayout />}>
    <Route path="users" element={<AdminUsers />} />
    <Route path="contacts" element={<AdminContacts />} /> 
    <Route path="students" element={<AdminStudents />} />
    <Route path="users/:id/edit" element={<AdminUpdate />} />
    <Route path="students/:id/edit" element={<StudentUpdate />} />
    </Route>
  </Routes>
  <Footer />
  </BrowserRouter>
  </>
  );
};

export default App;