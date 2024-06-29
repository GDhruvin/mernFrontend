import { NavLink } from "react-router-dom"
import './Navbar.css';
import { useAuth } from "../store/auth";

const Navbar = () => {
    const { isLoggin } = useAuth();

    return (
        <header>
            <div className="container">
                <NavLink to="/" className="logo-brand">
                    Dhruvin Gabani
                </NavLink>

                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/service"
                            >
                                Service
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">
                                About
                            </NavLink>
                        </li>
                        {isLoggin ?
                            <li>
                                <NavLink to="/logout">
                                    Log-out
                                </NavLink>
                            </li>
                            :
                            <>
                                <li>
                                    <NavLink to="/login">
                                        Log-in
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/register">
                                        Register
                                    </NavLink>
                                </li>
                            </>
                        }
                    </ul>
                </nav>
            </div >
        </header >
    );
};

export default Navbar;