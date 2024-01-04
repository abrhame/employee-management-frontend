import { combineReducers } from "redux";
import formReducer from "./formReducer";
import employeeReducer from "./employeeReducer";
import editmodalReducer from "./editModalReducer";
import registerModalReducer from "./registerModalReducer";
import registerReducer from "./registerReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
    form: formReducer,
    employees: employeeReducer,
    editModal: editmodalReducer,
    registerModal: registerModalReducer,
    register: registerReducer,
    login: loginReducer,
})

export default rootReducer;