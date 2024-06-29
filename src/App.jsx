import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Contact } from "./pages/Contact";
import { Service } from "./pages/Service";
import { Error } from "./pages/Error";
import { Logout } from "./pages/Logout";
import Navbar from "./component/Navbar";
import { AdminLayout } from "./layouts/AdminLayout";
import { AdminUser } from "./pages/Admin-User";
import { AdminContact } from "./pages/Admin-Contact";
import { AdminService } from "./pages/Admin-Service";
import { AdminHome } from "./pages/Admin-Home";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Error />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUser />} />
            <Route path="contacts" element={<AdminContact />} />
            <Route path="service" element={<AdminService />} />
            <Route path="home" element={<AdminHome />} />
          </Route >
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
