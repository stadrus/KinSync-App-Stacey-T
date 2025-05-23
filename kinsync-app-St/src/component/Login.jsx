const Login = () => {
    return (
        <div className="login">
            <h1>Login</h1> 
            <form className="login">
                <label>Email</label>
                <input type="email" placeholder="Enter Email"></input>
                <label>Password</label>
                <input type="password" placeholder="Enter Password"></input>
            </form>   
        </div>
    );
};

export default Login;