import images from '../images/profile.svg'
import { useNavigate } from 'react-router';
import { useState } from 'react';


const Register = () => {
    
    const [userData, setUserData] = useState({
        id:0,
        name:"",
        email:"",
        password:"",
        correctPassword: "",
    });

    //include use state for each key//
    //create onChange elements for each key e.targt.value setStateName(key)

    localStorage.setItem('user', setUserData);

    const navigate = useNavigate();
   
    
    const handleSubmit = () => {
        if (userData.password !== userData.correctPassword){
            alert ("Passwords do not match");
        } else {
            navigate('/Login');
        }
    }
    return (
        <div>
            <h1>Register Today!</h1>
            <img className="blankpic" src={images} alt="blank user profile"></img>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Name' value={userData.name}/><br></br>
                <input type="email" placeholder='Enter Password' value={userData.email}/><br>
                </br>
                <input type="password" placeholder='Enter Password' value={userData.password}/><br></br>
                <button type="submit">Submit</button>
            </form>   
        </div>
    );
};

export default Register;