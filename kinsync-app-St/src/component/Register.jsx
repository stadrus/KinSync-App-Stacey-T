import images from '../images/profile.svg'
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';


function Register () {
    // let data = JSON.stringify(user);
  
    //create user inputs using State// 
    const [name,setName]= useState ('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');

    // const storedUser = JSON.parse(localStorage.getItem(userData));
    // console.log(storedUser);
    // //moved to login component//

    //create useState for userData to add new user in local storage//
    const [userData, setUserData] = useState([]); //holds users data
    
    // localStorage.setItem('user', setUserData);
     
    //further research on localstorage propmt me to use, useEffect.//
    useEffect (() => {
       localStorage.setItem('userData', JSON.stringify(userData));
       console.log(userData);
    },[userData]);
   

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
        const newUser = {name, email, password}
        setUserData(prev=> [...prev, newUser]);
        if (name === '' || email === '' || password === ''){
            alert ("Profile in use.")
        } else {
            alert ("Registration Complete");
        }
       
        fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
            "x-api-key": "reqres-free-v1",
            "Content-Type": "application/json"
        },
            body: JSON.stringify(newUser)
        })
        .then(response => response.json())
        .then(data => console.log(data));
        navigate('/Login');
    }
    return (
        <div>
            <h1>Register Today!</h1>
            <img className="blankpic" src={images} alt="blank user profile"></img>
            <form id="register-form" onSubmit={handleSubmit}>
                <input type="text" id="name-user" placeholder='Enter Name' value={name} onChange={handleName}/><br></br>
                <input id="email" placeholder='Enter Email' type="email"  value={email} onChange= {handleEmail}/><br>
                </br>
                <input id="current-password" placeholder="Enter Password" type="password"  value={password} onChange={handlePassword}/><br></br>
                <button type="submit">Submit</button>
            </form>   
        </div>
    );
};

export default Register;