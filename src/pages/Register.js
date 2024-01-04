import React from "react";
import Input from "../componenets/Input";
import { useDispatch, useSelector } from "react-redux";
import Card from "../componenets/Card";
import insa from "../assets/insa.webp";
import "../style/register.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../componenets/Button";
import { postData } from "../services/api";

const Register = () => {
    const dispatch = useDispatch();
    const register_data = useSelector(state => state.register.fields)
    const navigate = useNavigate()
    console.log(register_data)
    const handleChange = (event) => {
        event.preventDefault()
        dispatch(
            {
                type: "REGISTER_USER",
                payload: {
                    fieldName: event.target.name,
                    fieldValue: event.target.value,
                }
            }
        )
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await postData("/register", register_data)
            if (response.status === 201) {
                window.alert("User Registred Sucessfully")
                navigate("/login")
                localStorage.setItem('token', response.data.token)
            } 
            } catch (error) {
            window.alert(error.response.data)

        }
    }
    const handleRegister = () => {
        console.log("Register")
    }
    return <div className="login">
        <Card>
            <img src={insa} alt="insa" className="login-img" /> 
            <form className="login-form" onSubmit={handleSubmit}>
            <Input label="Full Name" name="name"     type="text" onChange={handleChange}/>
            <Input label="Email" name="email" type="email" onChange={handleChange} />
            <Input label="Password" name="password" type="password" onChange={handleChange}/> 
            <Button className="login-button" type="submit" Children="Register" onClick={handleRegister} />
            </form>
            <p className="register-p">Already have an account? <Link to="/login">Login</Link></p>
        </Card>
    </div>
}

export default Register;