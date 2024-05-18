import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";

export const AdminUpdate = () => {
    const [data,setData] = useState({
        username:"",
        email:"",
        phone:"",
    });

    const params = useParams();
    const { authorizationToken } = useAuth();

    const getSingleUserData =async () => {
        try{
        const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`, 
                    {
                    method: "GET",
                    headers: {
                        Authorization: authorizationToken,
                    }
                });
    
                const data = await response.json();
            console.log(`users single data:  ${data}`);
    
            setData(data);

          //  if(response.ok){
            //    getAllUsersData();
              //  alert("User Deleted Successfully....")
            //}
        } catch(error) {
            console.log(error);
                       }
            };    

    useEffect(() => {
        getSingleUserData();
    }, []);

    const handleInput = (e) => {
     let name = e.target.name;
     let value = e.target.value;

     setData({
        ...data,
        [name]: value,
     });
    };

const handleSubmit = async(e) => {
e.preventDefault();
try{
    const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`,
     {
        method: "PATCH",
        headers: {
            "Content-Type":"application/json",
            Authorization: authorizationToken,
        },
        body: JSON.stringify(data),
    }
);
   if(response.ok){
   alert("Updated Successfully...");
}else {
    alert("Not Updated...");
}
} catch(error) {
console.log(error);
           }
};

    return(
   
                <section className="section-contact">
                    <div className="contact-content container">
                    <h1 className="main-heading">Update User Data</h1>
                    </div>
                    <div className="container grid grid-two-cols">
                   
                <section className="section-form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" autoComplete="off"
                            value={data.username}
                            onChange={handleInput} required />
                        </div>
                        <div>
                            <label htmlFor="email">E-Mail</label>
                            <input type="text" name="email" id="email" autoComplete="off"
                            value={data.email}
                            onChange={handleInput} required />
                        </div>

                        <div>
                            <label htmlFor="phone">Phone No</label>
                            <input type="text" name="phone" id="phone" autoComplete="off"
                            value={data.phone}
                            onChange={handleInput} required />
                        </div>
                            
                       <br />
                        <div className="button1">
                        <button type="submit" className="btn btn-submit">
                        Update
                        </button>
                        </div>                        
                        </form>  
                                      
                </section>
                </div>
                </section>
  );      
};