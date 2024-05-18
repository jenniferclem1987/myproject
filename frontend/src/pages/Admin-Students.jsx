    import { useEffect, useState } from "react";
    import { useAuth } from "../store/auth";
    import { Link} from "react-router-dom";
    import { RiDeleteBin6Fill } from "react-icons/ri";
    import { FaEdit } from "react-icons/fa";
    
    export const AdminStudents = () => {

        const [students, setStudents] = useState([]);
        const {authorizationToken} = useAuth();
        const getAllStudentsData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/students", {
                method: "GET",
                });
            const data = await response.json();
            console.log(`students: ${data}`);
            setStudents(data);
        } catch(error) {
            console.log(error);
        }
        };
    
    const deleteStudents =async (id) => {
        try{
        const response = await fetch(`http://localhost:5000/api/admin/students/delete/${id}`, {
                    method: "DELETE",
                    headers: {
                        Authorization: authorizationToken,
                    }
                });
    
                const data = await response.json();
            console.log(`students after delete: ${data}`);
    
            if(response.ok){
                getAllStudentsData();
                alert("Student Data Deleted Successfully....")
            }
        } catch(error) {
            console.log(error);
                       }
            };
        
        useEffect(() => {
         getAllStudentsData();
        },[]);
        return (
             <> 
             
             {/*<section className="admin-users-section">
                <div className="container">*/}
                    <h1 className="data1">Student Data</h1>                
                {students.map((curStudent, index) => {
              return (
                <div className="users">   
                <div key={index}>
                <h2 style={{fontSize:"20px"}}>Student_Id : <span style={{fontSize:"22px"}}>{curStudent.student_id}</span></h2>
                <h2 style={{fontSize:"20px"}}> Student_Name : <span style={{fontSize:"22px"}}>{curStudent.student_name}</span></h2>
                <h2 style={{fontSize:"20px"}}> Student_Age : <span style={{fontSize:"22px"}}>{curStudent.student_age}</span></h2>
                <h2 style={{fontSize:"20px"}}> Student_Address : <span style={{fontSize:"22px"}}>{curStudent.student_address}</span></h2>
                <h2 style={{fontSize:"20px"}}> Student_MobileNo : <span style={{fontSize:"22px"}}>{curStudent.student_mobileno}</span></h2>
                <h2 style={{fontSize:"20px"}}> Student_Disease : <span style={{fontSize:"22px"}}>{curStudent.student_disease}</span></h2>
                   <div className="btn">
                    <Link to={`/admin/students/${curStudent._id}/edit`} style={{color:"black"}}> <FaEdit /> </Link>
                
                    <button className="bt" onClick={() => deleteStudents(curStudent._id)} style={{color:"black",backgroundColor:"transparent" }}> <RiDeleteBin6Fill />
</button>
                    <br></br>
                <br></br>
                </div>
                </div>
                  </div>  
              );
        })};
        
        
        </>
    );
    };