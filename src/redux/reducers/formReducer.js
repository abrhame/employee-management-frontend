const initialState = {
    fields: {
        name: '',
        email: '',
        phoneNumber: '',
        department: '',
        role: '',
    }
}

export default function formReducer(state = initialState, action){

    switch(action.type){
        case 'SET_FORM':
            return {
                ...state,
                fields: {
                    ...state.fields,
                    [action.payload.fieldName] : action.payload.fieldValue,
                },
            };
        case 'CLEAR_FORM':
            return initialState;
        case "EDIT_MODE":
            return {
                ...state,
                fields: action.payload,
            };
        default:
            return state;
    }
}


