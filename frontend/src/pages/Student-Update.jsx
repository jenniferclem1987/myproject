import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";

export const StudentUpdate = () => {
    const [data,setData] = useState({
        student_id:"",
        student_name:"",
        student_age:"",
        student_address:"",
        student_mobileno:"",
        student_disease:"",
    });

    const params = useParams();
    const { authorizationToken } = useAuth();

    const getSingleStudentData =async () => {
        try{
        const response = await fetch(`http://localhost:5000/api/admin/students/${params.id}`, 
                    {
                    method: "GET",
                    headers: {
                        Authorization: authorizationToken,
                    }
                }
            );
    
                const data = await response.json();
            console.log(`students single data:  ${data}`);
    
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
        getSingleStudentData();
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
    const response = await fetch(`http://localhost:5000/api/admin/students/update/${params.id}`,
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
                    <h1 className="main-heading">Update Student's Data</h1>
                    </div>
                    <div className="container grid grid-two-cols">
                   
                <section className="section-form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="student_id">Student_Id</label>
                            <input type="text" name="student_id" id="student_id" autoComplete="off"
                            value={data.student_id}
                            onChange={handleInput} required />
                        </div>
                        <div>
                            <label htmlFor="student_name">Student_Name</label>
                            <input type="text" name="student_name" id="student_name" autoComplete="off"
                            value={data.student_name}
                            onChange={handleInput} required />
                        </div>

                        <div>
                            <label htmlFor="student_age">Student_Age</label>
                            <input type="text" name="student_age" id="student_age" autoComplete="off"
                            value={data.student_age}
                            onChange={handleInput} required />
                        </div>
                            
                        <div>
                            <label htmlFor="student_address">Student_Address</label>
                            <input type="text" name="student_address" id="student_address" autoComplete="off"
                            value={data.student_address}
                            onChange={handleInput} required />
                        </div>

                        <div>
                            <label htmlFor="student_mobileno">Student_MobileNo</label>
                            <input type="text" name="student_mobileno" id="student_mobileno" autoComplete="off"
                            value={data.student_mobileno}
                            onChange={handleInput} required />
                        </div>

                        <div>
                            <label htmlFor="student_disease">Student_Disease</label>
                            <input type="text" name="student_disease" id="student_disease" autoComplete="off"
                            value={data.student_disease}
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