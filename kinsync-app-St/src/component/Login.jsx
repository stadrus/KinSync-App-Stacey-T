import { useNavigate } from "react-router";
import { useState } from "react";

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = setSate('');
    
    const navigate = useNavigate();
    
    // const storedUser = JSON.parse(localStorage.getItem('userData'))
    // console.log(storedUser);
    const storedUser = JSON.parse(localStorage.getItem('userData'));
    console.log(storedUser);

    const handleSubmit = () => {
        if (email === "" && password === ""){
            alert ("Login Successful");
            navigate('/Dashboard');
        } else{
            alert("Email or password is invalid");
        }
    };

    const handleClick = () =>{
        navigate('/Register')
    };

    return (
        <div>
            <h1>Login</h1> 
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter Email"/>
                <input type="password" placeholder="Enter Password"/>
                <button type="submit">Submit</button><br></br>
                <button type="button" onClick={handleClick}>Register</button>
            </form>
        </div>
    );
};

export default Login;