const Login = () => {
    return (
        <div className="login">
            <div className="main">
                <h1 className="name">ProjX Manager</h1>
                <form action="">
                    <label htmlFor="first" >Username:</label>
                    <input type="text" id="first" name="first" placeholder="Enter your Username" required></input>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your Password" required></input>
                    <div className="wrap">
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <p>Need an account? <a href="#">Register</a></p>
            </div>   
            
        </div>

    );
    
  };
  
  export default Login;