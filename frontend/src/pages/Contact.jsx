 import { useState } from "react";
import { useAuth} from "../store/auth";
import { Link } from "react-router-dom";

const defaultContactFormData = {
    username:"",
    email:"",
    message:"", 
};
export const Contact = () => {

    const [contact,setContact] = useState(defaultContactFormData);

    const [userData, setUserData] = useState(true);

    const {user} = useAuth();

    if(userData && user) {
        setContact({
            username:"user.username",
        email:"user.email",
        message:"",
        });

        setUserData(false);
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]:value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
        const response = await fetch(`http://localhost:5000/api/form/contact`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(contact),
        });
        
       console.log("contactForm",response);
    
        if(response.ok) {
            setContact(defaultContactFormData);
            const data = await response.json();
            console.log(data);
            alert("Message sent successfully");
            }  
            } catch(error) {
                alert("Message not send");
            console.log(error);
        }
    };
    

    return (
        <>
        <section className="section-contact">
                          
                <div className="container grid grid-two-cols">
                <div className="contact-img">
                    <img src="/images/contact-us (1).jpg" alt="con img" height="400" width="550" />
                </div>
                <section className="section-form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" autoComplete="off"
                            value={contact.username}
                            onChange={handleInput} required />
                        </div>

                        <div>
                            <label htmlFor="email">E-mail</label>
                            <input type="text" name="email" id="email" autoComplete="off"
                            value={contact.email}
                            onChange={handleInput} required />
                        </div>
                            
                        <div>
                            <label htmlFor="message">Message</label><br />
                            <textarea name="message" id="message" autoComplete="off" value={contact.message} onChange={handleInput} required rows="5"></textarea>
                        </div>

                        <br />
                        <div className="button1">
                        <button type="submit" className="btn btn-submit">
                        Submit
                        </button>
                        </div>  
                        <Link to={`/admin/contacts`} style={{textDecoration:"underline" ,textDecorationColor:"black",textDecorationThickness:"3px"}} > view contact details </Link>                       
                        </form>                    
                </section>
                </div>

                <section className="mb-3">
                    
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125406.03875538318!2d78.60662512989528!3d10.816002350788583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50ff2aecdad%3A0x6de02c3bedbbaea6!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1713549091181!5m2!1sen!2sin" width="100%" height="300"  allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                </iframe>
                </section>
                </section>
                
        </>
    )
}