import { NavLink, Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <>
      <header>
        <div className="container" >
            <nav>
                <ul>
                    <li><NavLink to="/admin/users" >users</NavLink></li>
                    <li><NavLink to="/admin/contacts" >contacts</NavLink></li>
                    <li><NavLink to="/admin/service" >services</NavLink></li>
                    <li><NavLink to="/admin/contacts" >home</NavLink></li>
                </ul>
            </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}
