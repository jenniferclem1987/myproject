import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

const URL = "http://localhost:5000/api/auth/register";

export const Register = () => {
const [user,setUser] = useState({
    username:"",
    email:"",
    phone:"",
    password:"",
});

const navigate = useNavigate();
const {storeTokenInLS } = useAuth();

const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
        ...user,
        [name]: value,
    })
};

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try{
    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(user),
    });

    if(response.ok) {
        const res_data = await response.json();
        console.log("response from server", res_data);
        storeTokenInLS(res_data.token);
        setUser({username:"", email:"", phone:"", password:"",});
        navigate("/login");
    }

console.log(response);
    } catch(error) {
        console.log("register", error);
    }
};

    return (
    <>
    <section>
        <main>
            <div className="section-registration">
            <div className="container grid grid-two-cols">
                <div className="registration-image">
                   <img src="images/image1.jpg" alt="pic" width="700" height="400" />
                </div>

                <div className="registration-form">
                    <h1 className="main-heading mb-3">Registration form</h1>
                    <br />

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input type="text"
                            name="username" 
                            placeholder="username"
                            id="username"
                            required autoComplete="off"
                            value={user.username}
                            onChange={handleInput} />
                        </div>
                       
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email"
                            name="email" 
                            placeholder="email"
                            id="email"
                            required autoComplete="off"
                            value={user.email}
                            onChange={handleInput} />
                        </div>

                        <div>
                            <label htmlFor="phone">Phone Number</label>
                            <input type="number"
                            name="phone" 
                            placeholder="phone"
                            id="phone"
                            required autoComplete="off" 
                            value={user.phone}
                            onChange={handleInput} />

                        </div>

                        <div>
                            <label htmlFor="password">password</label>
                            <input type="password"
                            name="password" 
                            placeholder="password"
                            id="password"
                            required autoComplete="off"
                            value={user.password}
                            onChange={handleInput} />
                        </div>

                        <br />
                        
                        <div className="btn-log">
                        <button type="submit" className="btn btn-submit">
                        Register Now
                        </button>

                        <Link to={`/admin/users`} style={{textDecoration:"underline" ,textDecorationColor:"black",textDecorationThickness:"3px"}} > view admin table </Link> 
                       
                        
                        </div>
                        
                    </form>
                    </div>
            </div>
            
            </div>
            
        </main>
        </section>
        </>
    );
};