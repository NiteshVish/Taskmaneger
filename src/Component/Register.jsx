import React from 'react';
import { NavLink } from 'react-router-dom';

function Signup(props) {
    return (
        <div>
            <div className="signup">
                <div className="image">
                    <img src="https://task-apps-client.vercel.app/assets/signup-CndSm3Na.png" alt="" width={"400px"}/>
                </div>
                <form className="signuppage">
                    <h1 style={{color:"#3368C0",fontFamily: "Pacifico,serif"}}>Sign up</h1>
                    <label htmlFor="">Email:</label><br />
                    <input type="email" style={{backgroundColor:"whitesmoke",padding:"20px",border:"solid 1px black",color:"black"}}  name="" id="" placeholder='Enter a email' /><br /><br />
                    <label htmlFor="">Password:</label><br />
                    <input type="password" style={{backgroundColor:"whitesmoke",padding:"20px",border:"solid 1px black",color:"black"}}  name="" id="" placeholder='Enter a Password'/><br /><br />
                     <label htmlFor="">Conform Password:</label><br />
                    <input type="password" style={{backgroundColor:"whitesmoke",padding:"20px",border:"solid 1px black",color:"black"}}  name="" id="" placeholder='Enter a Conform Password'   /><br /><br />
                    <p style={{fontWeight:"600"}}>Already have an account ?<NavLink to="/login">Login here...</NavLink></p>
                     <button style={{width:"100px",height:"45px",background:"#3368C0",color:"white",borderRadius:"6px",fontWeight:"600",border:"none"}}>Sign Up</button>
                </form>
            </div>
            
        </div>
    );
}

export default Signup