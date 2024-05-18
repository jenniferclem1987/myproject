import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { RiContactsBook3Fill } from "react-icons/ri";
import { SiGnuprivacyguard } from "react-icons/si";
import { FiLogOut } from "react-icons/fi";

export const Navbar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <>
        <header>
         <div className="container">
            <div className="logo-brand">
                <h1 className="title" style={{fontFamily:"cursive",color:"maroon"}} >MONTARY ANTONOMOUS COLLEGE</h1>
            </div>

            <nav>
             <ul>
                <li>
                    <NavLink to="/"> <FaHome /> Home</NavLink>
                </li>
                
                    {isLoggedIn ? (
                    <li>
                    <NavLink to="/logout"><FiLogOut />  Logout</NavLink>
                    </li>
                    ) :(
                         <>
                    <li>
                    <NavLink to="/register"> <SiGnuprivacyguard /> SignUp</NavLink></li>
                <li>
                    <NavLink to="/login"> <FaUsers /> Login</NavLink></li>
                    </>
                )}

                <li>
                    <NavLink to="/student"> <PiStudentFill /> Studentdata</NavLink></li>
                <li>
                    <NavLink to="/contact"> <RiContactsBook3Fill /> Contact</NavLink></li>
             </ul>


            </nav>
         </div>

        </header>
        </>
    )
}