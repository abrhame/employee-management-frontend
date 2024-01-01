const initialState = {
    isOpen: false,
}

export default function editmodalReducer(state=initialState, action) {
    switch(action.type) {
        case "REGISTER_OPEN_MODAL":
            return {
                ...state,
                isOpen:true,
            }
        case "REGISTER_CLOSE_MODAL":
            return {
                ...state,
                isOpen:false,
            }
        default:
            return state;
    }
}