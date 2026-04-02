import { useEffect, useState } from "react";
import {useTypewriter,Cursor} from 'react-simple-typewriter';
import {Link} from 'react-router-dom';
import EmployeeService from "../services/EmployeeService";
function EmployeeListComponent()
{
    const [employees,setEmployees] = useState([]);
    const [value] = useTypewriter({
         words:["Details","List","Info"],
         loop:true,
         typeSpeed:120,
         deleteSpeed:80   
    })
    useEffect(()=>{
        EmployeeService.getAllEmployees().then(res=>{
            setEmployees(res.data);
        })
    },[]);
    return (
        <div className="container pt-5">
            <h4 className="text-center"> Employee {value} <Cursor/> </h4>
            <div className="row mt-5">
                <Link to="/add-emp" className="btn btn-warning mb-3" style={{width:"250px"}}> Add Employee </Link>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>DOJ</th>
                            <th>Designation</th>
                            <th>Department</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(employee=>{
                                return <tr key={employee.id}>
                                            <td>{employee.id}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.doj}</td>
                                            <td>{employee.dept.deptName}</td>
                                            <td>{employee.dept.designation}</td>
                                            <td></td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default EmployeeListComponent;