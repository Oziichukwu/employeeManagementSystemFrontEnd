import React, { useState, useEffect  } from 'react';
import EmployeeService from '../services/EmployeeService';
//import { useHistory } from 'react-router-dom';


const AddEmployee = ({history, match}) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [emailId, setEmailId] = useState("")
    const [userName, setUserName] = useState("")

    const cancelSaveEmployeehandler= (e) => {

        e.preventDefault()

        history.push("/employees")
        
    }

    const saveOrUpdateEmployeehandler = (e)=> {

        e.preventDefault()
        
        const employee = {firstName , lastName, emailId, userName}

        if (match.params.id){
            EmployeeService.updateEmployee(match.params.id, employee).then((response) => {

                history.push("/employees")

            }).catch((err) => {
                console.error(err)
            })

        }else {
            EmployeeService.createEmployee(employee).then((response)=>{

                console.log(response.data)

                history.push("/employees")
    
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
       EmployeeService.getEmployeeById(match.params.id).then((response)=>{
           setFirstName(response.data.firstName)
           setLastName(response.data.lastName)
           setEmailId(response.data.emailId)
           setUserName(response.data.userName)
       }).catch((err) => {
           console.log(err)
       })
    }, [])

    const label = ()=>{
        if (match.params.id){
            return <h2 className="text-center">Update Employee</h2>
        }else{
            return <h2 className="text-center">Add Employee</h2>
        }
    }

    return ( <div>
        <br />
       <div className="container">
           <div className="row">
               <div className="card col-md-6 offset-md-3 offset-md-3">
                    {label()}
                    <div className="card-body">
                        <form onSubmit>
                            <div className="form-group mb-2">
                                <label className="form-label">First Name:</label>
                                <input type="text" placeholder="Enter First Name"
                                name = "firstName"
                                className="form-control"
                                value = {firstName}
                                onChange={(e)=>setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Last Name:</label>
                                <input type="text" placeholder="Enter Last Name"
                                name = "lastName"
                                className="form-control"
                                value = {lastName}
                                onChange={(e)=>setLastName(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Email Id:</label>
                                <input type="text" placeholder="Enter Email Id"
                                name = "email"
                                className="form-control"
                                value = {emailId}
                                onChange={(e)=>setEmailId(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Username:</label>
                                <input type="text" placeholder="Enter username"
                                name = "username"
                                className="form-control"
                                value = {userName}
                                onChange={(e)=>setUserName(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-success" onClick={(e)=>saveOrUpdateEmployeehandler(e)}>Submit</button>
                            <button className="btn btn-danger m-2" onClick={(e)=>cancelSaveEmployeehandler(e)}>Cancel</button>
                        </form>
                    </div>
               </div>
           </div>
       </div>
    </div> );
}
 
export default AddEmployee;