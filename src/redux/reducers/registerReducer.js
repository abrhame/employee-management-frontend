

const initialState = {
    fields:{    
        name:"",
        email: "",
        password: "",
    }
}


export default function registerReducer(state=initialState, action) {
    switch(action.type) {
        case "REGISTER_USER":
            return {
                ...state,
                fields: {
                    ...state.fields,
                    [action.payload.fieldName] : action.payload.fieldValue 
                }
            }

        default:
            return state
    }
}