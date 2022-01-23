import axios from "axios";


const DELETE_EMPLOYEE_BASE_REST_API = "http://localhost:8080/api/v1"
const GET_EMPLOYEE_BASE_REST_API_URL = "http://localhost:8080/api/v1"
const EMPLOYEE_BASE_REST_API_URL = "http://localhost:8080/api/v1/employees";
const CREATE_EMPLOYEE_BASE_REST_API_URL = "http://localhost:8080/api/v1/create_employee";
const UPDATE_EMPLOYEE_BASE_REST_API_URL = "http://localhost:8080/api/v1"


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