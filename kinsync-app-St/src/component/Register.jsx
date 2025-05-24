import images from '../images/profile.svg'
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';


const Register = () => {
    // let user = JSON.stringify(mock);

    //create user inputs using State// 
    const [name,setName]= useState ("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    
    //create useState for userData to add new user in local storage//

    // let nextId = 0; //will be used to add users to array

    const storedUser = JSON.parse(localStorage.getItem('userData'))
    console.log(storedUser);

    const [userData, setUserData] = useState(storedUser); //holds users data

    useEffect (() => {
        localStorage.setItem('userData', JSON.stringify(userData))
        console.log(userData);
    },[userData])
   
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
                <input type="email" placeholder='Enter Email' value={userData.email}/><br>
                </br>
                <input type="password" placeholder='Enter Password' value={userData.password}/><br></br>
                <button type="submit">Submit</button>
            </form>   
        </div>
    );
};

export default Register;