import { useEffect, useState } from "react";
import {useAuth} from "../store/auth";

export const AdminContacts =() => {
    const [contactData, setContactData] = useState([]);
    const { authorizationToken } = useAuth();
    const getContactsData = async () => {
        try {
const response = await fetch("http://localhost:5000/api/admin/contacts", {
    method:"GET",
    headers:{
        Authorization: authorizationToken,
    },
});
const data = await response.json();
console.log("contact data: ", data);
if(response.ok) {
    setContactData(data);
}
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getContactsData();
},[]);

    return(
         <>
    <section className="admin-contacts-section">
    <h1>Admin Contact Data </h1>
    {    
        contactData.map((curContactData, index) => {
        const { username,email,message } = curContactData;
        return (
         < div key={index} >
            <div className="users">
            <h3> Username: <span>{username}</span></h3>
            <h3> E-Mail: <span>{email}</span></h3>
             <h3> Message: <span>{message}</span></h3>
             <br></br>
             <br></br>
             <br></br>
             <div className="user_bottom"></div>
           {/* <button className="btn">Delete</button>*/}
          </div>
          </div>
        );
    })};
    
    </section>
    </>
    );
};