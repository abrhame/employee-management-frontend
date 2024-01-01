import React from "react";
import '../style/register-form.css'
import Input from "./Input";
import Button from "./Button";
import { postData } from "../services/api";
import { useDispatch, useSelector } from 'react-redux';

const RegisterForm = ({handleClose}) => {
    const dispatch = useDispatch();
    const fields = useSelector(state => state.form.fields)
    const handleChange = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_FORM',
            payload: {
                fieldName:event.target.name,
                fieldValue: event.target.value,
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(fields)
        postData("/",fields).then((response) => {
            console.log(response)
            if(response.status === 201){
                window.alert("Employee Registered Successfully")
                const data = response.data
                console.log(data)
                dispatch({
                    type:"ADD_EMPLOYEE",
                    payload:data,
                })
            }
        })

        dispatch({
            type: "CLEAR_FORM"
        })

    }

    const onClick = () => {
        console.log("clicked")
    }

    return <>
        <header className="form-header">
            <h2 className="header-content">Register Employee</h2>
        </header>
        <body>
            <form className="form" onSubmit={submitHandler}>
                <div className="col-1">
                    <Input value={fields.name} label="Name" name="name" type="text" onChange={handleChange} />
                    <Input value={fields.email} label="Email" name="email" type="email" onChange={handleChange} />
                    <Input value={fields.phoneNumber} label="phoneNumber" name="phoneNumber" type="tel" onChange={handleChange} />
                </div>
                <div className="col-2">
                    <Input value={fields.department}  label="Department" name="department" type="text" onChange={handleChange} />
                    <Input value={fields.role} label="Role" name="role" type="text" onChange={handleChange} />
                    <div className="register" >
                    <Button type="submit" onClick={onClick} Children="Register" />
                    <Button type="submit" onClick={handleClose} Children="Close" />
                    </div>
                </div>
            </form>
        </body>
    </>
}


export default RegisterForm;