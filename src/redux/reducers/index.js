import { combineReducers } from "redux";
import formReducer from "./formReducer";
import employeeReducer from "./employeeReducer";
import editmodalReducer from "./editModalReducer";
import registerModalReducer from "./registerModalReducer";

const rootReducer = combineReducers({
    form: formReducer,
    employees: employeeReducer,
    editModal: editmodalReducer,
    registerModal: registerModalReducer,
})

export default rootReducer;