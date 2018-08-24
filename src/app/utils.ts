const API_URL = "http://localhost:8080/survey/api/";
const EMPLOYEE_URL = API_URL + "employees";
const EMPLOYEE_LOGIN_URL = API_URL + "users";


// const ADD_ACTION = "add";
// const GET_ACTION = "get";

export class Utils {


    public static addEmployeeURL() {
        return EMPLOYEE_URL;
}
public static getEmployeeURL() {
    return EMPLOYEE_URL;
}
public static getEmployeeLoginURL() {
    return EMPLOYEE_LOGIN_URL;
}
}