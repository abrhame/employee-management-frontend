const initialState = {
    employees: [],
    totalEmployees: 0,
  };
  
export default function employeeReducer(state = initialState, action){
    switch (action.type) {
      case "FETCH_EMPLOYEES":
        return {
          ...state,
          employees: action.payload.employees,
          totalEmployees: action.payload.totalEmployees,
        };
        case "ADD_EMPLOYEE":    
            const newEmployees = [...state.employees,action.payload]
            return {
                ...state,
                employees: newEmployees,
                totalEmployees: state.totalEmployees + 1,
            }
        case "DELETE_EMPLOYEE": 
            const updatedEmployees = state.employees.filter(
                (employee) => employee._id !== action.payload.id
            );
            return {
                ...state,
                employees: updatedEmployees,
                totalEmployees: state.totalEmployees - 1,
            };
            case "EDIT_EMPLOYEE":
                const editedEmployees = state.employees.map((item) =>
                  item._id === action.payload.id ? action.payload.editedEmployee : item
                );
                console.log(editedEmployees);
                return {
                  ...state,
                  employees: editedEmployees,
                  totalEmployees: state.totalEmployees,
                };
        default:
            return state;
        }
    };
  

  