import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = setSate('');
    const navigate = useNavigate();
    
   localStorage.getItem('isLoggedin', true);
    
    const handleSubmit = () => {
        if (userName === 'name' && password === 'password'){
            console.log("Login Successful");
            navigate('/Dashboard');
        } else{
            console.log("Email or password is invalid");
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