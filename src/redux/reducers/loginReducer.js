const initialState = {
    fields: {
        email: "",
        password: "",
    }
}


export default function loginReducer(state=initialState,action) {
    switch (action.type){
        case "LOGIN_USER":
            return {
                ...state,
                fields: {
                    ...state.fields,
                    [action.payload.fieldName] : action.payload.fieldValue,
                }
            }
        
        default:
            return state
    }
}