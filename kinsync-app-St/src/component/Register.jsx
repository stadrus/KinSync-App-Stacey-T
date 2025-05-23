import images from '../images/profile.svg'

const Register = () => {
    return (
        <div className="login">
            <h1>Register Today!</h1>
            <img className="blankpic" src={images} alt="blank user profile"></img>
            <form className="login">
                <label>Name</label>
                    <input type="text" placeholder="Enter Name"></input>
                <label>Email</label>
                    <input type="email" placeholder="Enter Email"></input>
                <label>Password</label>
                    <input type="password" placeholder="Enter Password"></input>
            </form>   
        </div>
    );
};

export default Register;