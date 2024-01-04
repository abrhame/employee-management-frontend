import React from "react";
import { Link, json, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "../componenets/Input";
import Card from "../componenets/Card";
import insa from "../assets/insa.webp";
import "../style/login.css";
import Button from "../componenets/Button";
import { postData } from "../services/api";


const Login = () => {
    const dispatch = useDispatch();
    const login_data = useSelector(state => state.login.fields)

    const navigate = useNavigate()
    const handleChange = (event) => {
        event.preventDefault()
        dispatch({
            type: "LOGIN_USER",
            payload: {
                fieldName: event.target.name,
                fieldValue: event.target.value,
            }
        })
    }
    const handleSubmit =async (event) => {
        event.preventDefault();
        try {
            const response = await postData('/login', login_data)
            if (response.status === 200){
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user', JSON.stringify(response.data.user))
                navigate("/home")
            }else if(response.status === 400) {
                window.alert("User Not Found")
            } else{
                window.alert(response.data)
            }
        }catch(error) {
            window.alert(error.response.data)
        }

    }

    return <div className="login">
        <Card>
            <img src={insa} alt="insa" className="login-img" /> 
            <form className="login-form" onSubmit={handleSubmit}>
            <Input label="Email" name="email" type="email" onChange={handleChange} />
            <Input label="Password" name="password" type="password" onChange={handleChange}/> 
            <Button className="login-button" type="submit" Children="Login"/>
            </form>
            <p className="login-p">Dont't have an account? <Link to="/register">Register</Link> </p>
        </Card>
    </div>
}

export default Login;