import images from '../images/profile.svg'
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';





const Register = () => {
    // let data = JSON.stringify(user);
  
    //create user inputs using State// 
    const [name,setName]= useState ('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');

    // const storedUser = JSON.parse(localStorage.getItem('userData'));
    // console.log(storedUser);
    // //moved to login component//

    //create useState for userData to add new user in local storage//
    const [userData, setUserData] = useState({name:"",email:"",password:""}); //holds users data
    // localStorage.setItem('user', setUserData);
     
    //further research on localstorage propmt me to use, useEffect.//
    useEffect (() => {
        localStorage.setItem('userData', JSON.stringify(userData))
        console.log(userData);
    },[userData])
   

    //create onChange elements for each key e.targt.value setStateName(key)
    
    const handleName = (e) =>{
        setName(e.target.value);
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
     const handlePassword = (e) =>{
        setPassword(e.target.value);
    }


    const navigate = useNavigate();
   
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userData.name === "" || userData.email === "" || userData.password === ""){
            alert ("Registration Complete");
            navigate('/Login');
        } else {
            alert ("Profile in use.")
        }
    }
    return (
        <div>
            <h1>Register Today!</h1>
            <img className="blankpic" src={images} alt="blank user profile"></img>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Name' value={name} onChange={handleName}/><br></br>
                <input type="email" placeholder='Enter Email' value={email} onChange= {handleEmail}/><br>
                </br>
                <input type="password" placeholder='Enter Password' value={password} onChange={handlePassword}/><br></br>
                <button type="submit">Submit</button>
            </form>   
        </div>
    );
};

export default Register;