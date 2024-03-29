import axios from "axios";


const DELETE_EMPLOYEE_BASE_REST_API = "https://employee-recording-system.herokuapp.com/employee"
const GET_EMPLOYEE_BASE_REST_API_URL = "https://employee-recording-system.herokuapp.com/employee"
const EMPLOYEE_BASE_REST_API_URL = "https://employee-recording-system.herokuapp.com/employee"
const CREATE_EMPLOYEE_BASE_REST_API_URL = "https://employee-recording-system.herokuapp.com/employee"
const UPDATE_EMPLOYEE_BASE_REST_API_URL = "https://employee-recording-system.herokuapp.com/employee"


class EmployeeService {

    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }

    createEmployee(employee){
        return axios.post(CREATE_EMPLOYEE_BASE_REST_API_URL, employee)
    }

    getEmployeeById(employeeId){
        return axios.get(GET_EMPLOYEE_BASE_REST_API_URL + "/" + employeeId)
    }
    updateEmployee(employeeId, employee){
        return axios.put(UPDATE_EMPLOYEE_BASE_REST_API_URL + "/" + employeeId, employee) 
    }

    deleteEmployee(employeeId){
        return axios.delete(DELETE_EMPLOYEE_BASE_REST_API + "/" + employeeId)
    }
}

export default new EmployeeService();
