import { getData,putData } from "../../services/api"


export const setFormField = (fieldName, fieldValue) => (
    {
        type: 'SET_FORM',
        payload: {
            fieldName,
            fieldValue,
        },
    }
)

export const editField = (item) => ({
    type: "EDIT_MODE",
    payload: {
        name: item.name,
        email: item.email,
        phoneNumber: item.phoneNumber,
        department: item.department,
        role: item.role,
    },
})

export const fetchEmployees = (page) => async (dispatch) => {
    try {
      const limit = 10; // Adjust based on your backend configuration
      const response = await getData(`employees?page=${page}&limit=${limit}`);
      
      dispatch({
        type: "FETCH_EMPLOYEES",
        payload: {
          employees: response.data.employees,
          totalEmployees: response.data.totalEmployees,
          totalPages: response.data.totalPages,
          currentPage: page,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  

export const addEmployees = (employee) => ({
    type: 'ADD_EMPLOYEE',
    payload: employee,
})

export const deleteEmployee = (id) => ({
    type: 'DELETE_EMPLOYEE',
    payload: {
        id,
    }
})

export const editEmployee = (id, data) => ({
    type: 'EDIT_EMPLOYEE',
    payload: {
        id,
        editedEmployee: {
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber,
            department: data.department,
            role: data.role,
        },
    }
})


export const openModal = () => ({
    type: "OPEN_MODAL",
})

export const closeModal = () => ({
    type: "CLOSE_MODAL",
})

export const registerOpenModal = () => ({
    type: "REGISTER_OPEN_MODAL",
})

export const registerCloseModal = () => ({
    type: "REGISTER_CLOSE_MODAL",
})



// login actions

export const login_data = (fieldName,fieldValue) => (
    {
        type: "LOGIN_USER",
        payload: {
            fieldName,
            fieldValue
        }
    }
)

export const login =  (credentials) => async (dispatch) => {
    try{
        const response = await putData("/login",credentials)
        console.log(response)
        dispatch({
            type: "LOGIN_DATA",
            payload: response.data,
        })
    }catch(error){
        console.log(error)
    }
}

// register actions
export const registerData = (fieldName, fieldValue) => ({
    type:"REGISTER_USER",
    payload: {
        fieldName,
        fieldValue,
    }
})


export const register = (credentials) => async (dispatch) => {
    try {
        const response = await putData("/register", credentials)
        console.log(response)
        dispatch({
            type: "REGISTER_DATA",
            payload: response.data,
        })
    } catch (error) {
        console.log(error)
    }
}
