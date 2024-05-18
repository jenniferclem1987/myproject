import { NavLink, Outlet } from "react-router-dom";


export const AdminLayout = () => {
    return ( 
    <>
    <header>
       <div className="container">
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                    </NavLink>
                    </li>
                <li>
                <NavLink to="/admin/users">
                    </NavLink>
                </li>
                <li>
                <NavLink to="/admin/students"> 
                </NavLink>
                </li>
                <li>
                <NavLink to="/admin/contacts"> 
                </NavLink>
                </li>
            </ul>
        </nav>
       </div>
    </header>
   <Outlet />    
    </> 
    );
};