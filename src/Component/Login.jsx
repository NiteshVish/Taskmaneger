import React from 'react';
import { NavLink } from 'react-router-dom';

function Login(props) {
    return (
        <div>
              <div className="login">
                <div className="image">
                    <img src="https://task-apps-client.vercel.app/assets/Login-XRROANEj.png" alt="" width={"400px"}/>
                </div>
                <form className="loginpage">
                    <h1 style={{color:"#3368C0",fontFamily: "Pacifico,serif"}}>Login </h1>
                    <label htmlFor="">Email:</label><br />
                    <input type="email" style={{backgroundColor:"whitesmoke",padding:"20px",border:"solid 1px black",color:"black"}} name="" id="" placeholder='Enter a Email' /><br /><br />
                    <label htmlFor="">Password:</label><br />
                    

                    <input type="password" style={{backgroundColor:"whitesmoke",padding:"20px",border:"solid 1px black",color:"black"}} name="" id="" placeholder='Enter a Password'   /><br /><br />
                    <p>New User?<NavLink to="/signup"> Register here.. </NavLink></p>
                     <button style={{width:"100px",height:"42px",background:"#3368C0",color:"white",borderRadius:"6px",fontWeight:"600",border:"none"}}>Login</button>
                </form>
            </div>
            
        </div>
    );
}

export default Login;