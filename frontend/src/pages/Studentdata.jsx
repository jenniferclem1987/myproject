import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

export const Studentdata = () => {
const [user,setUser] = useState({
    student_id:"",
    student_name:"",
    student_age:"",
    student_address:"",
    student_mobileno:"",
    student_disease:"",
});
const navigate = useNavigate();

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
    const response = await fetch(`http://localhost:5000/api/form/student`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(user),
    });
    
    console.log("studentForm",response);

    if(response.ok) {
        setUser({ 
        student_id:"",
        student_name:"",
        student_age:"",
        student_address:"",
        student_mobileno:"",
        student_disease:"",});
        alert("student's data submitted....")
        navigate("/");
    }

console.log(response);
    } catch(error) {
        console.log("studentForm", error);
    }
};

    return (
    <>
    <section>
        <main>
            <div className="section-studentdata">

                    <h2 className="student-heading">Student's Information</h2>
<div className="form-data">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="student_id">Student_Id</label>
                            <input type="text"
                            name="student_id" 
                            placeholder="student_id"
                            id="student_id"
                            required autoComplete="off"
                            value={user.student_id}
                            onChange={handleInput} />
                        </div>
                       
                        <div>
                            <label htmlFor="student_name">Student_Name</label>
                            <input type="student_name"
                            name="student_name" 
                            placeholder="student_name"
                            id="student_name"
                            required autoComplete="off"
                            value={user.student_name}
                            onChange={handleInput} />
                        </div>

                        <div>
                            <label htmlFor="student_age">Student_Age</label>
                            <input type="number"
                            name="student_age" 
                            placeholder="student_age"
                            id="student_age"
                            required autoComplete="off" 
                            value={user.student_age}
                            onChange={handleInput} />

                        </div>
 
                        <div>
                            <label htmlFor="student_address">Student_Address</label>
                            <textarea
                            name="student_address" 
                            placeholder="student_address"
                            id="student_address"
                            required autoComplete="off"
                            value={user.student_address}
                            onChange={handleInput} />
                        </div>

                        <div>
                            <label htmlFor="student_mobileno">Student_Mobileno</label>
                            <input type="student_mobileno"
                            name="student_mobileno" 
                            placeholder="student_mobileno"
                            id="student_mobileno"
                            required autoComplete="off"
                            value={user.student_mobileno}
                            onChange={handleInput} />
                        </div>

                        <div>
                            <label htmlFor="student_disease">Student_Disease</label>
                            <input type="student_disease"
                            name="student_disease" 
                            placeholder="student_disease"
                            id="student_disease"
                            required autoComplete="off"
                            value={user.student_disease}
                            onChange={handleInput} />
                        </div>

                    
                        <br />
                        <div className="btn-data">
                        <div className="btn register">
                        <button type="submit" className="btn btn-submit">
                        Submit
                        </button>
                        <Link to={`/admin/students`} style={{textDecoration:"underline" ,textDecorationColor:"black",textDecorationThickness:"3px"}} > view student's details </Link>                       
                        </div>
                        
                        </div>
                    </form>
                </div>
                
            </div>
        </main>
        </section>
        </>

);
};
