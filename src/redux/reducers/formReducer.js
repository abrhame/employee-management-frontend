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
    // console.log(action.type, action.payload)
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



// // FormComponent.js
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// function FormComponent() {
//   const dispatch = useDispatch();
//   const fields = useSelector(state => state.form.fields);

//   const handleChange = (e) => {
//     dispatch({
//       type: 'UPDATE_FIELD',
//       payload: {
//         field: e.target.name,
//         value: e.target.value,
//       },
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Send the fields to the backend
//     postData('/endpoint', fields)
//       .then(response => {
//         // Handle the response
//       });
//   employees};

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="field1" value={fields.field1} onChange={handleChange} />
//       <input name="field2" value={fields.field2} onChange={handleChange} />
//       {/* Add more fields as needed */}
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default FormComponent;