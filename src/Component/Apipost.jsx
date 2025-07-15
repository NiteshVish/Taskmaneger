import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Login(props) {
    let[email,setEmail]=useState("")
    let[password,setPassword]=useState("")
    let[loading,setloading]=useState(false)
    let submithandler=async (e)=>{
        e.preventDefault();
        setloading(true)
        // api post method kese api ko post karte hai (how to post api)
        let res=await fetch("https://jsonplaceholder.typicode.com/users",{
            method:"POST",
            body:JSON.stringify({email,password,deviceType:"web",applicationId:"1"}),
            headers:{"Content-Type":"application/json",
                "authorizedation":"sfgudjfkhisdk"
            }
        })
        let data=await res.json();
        console.log(data)
        if(data.success){
            setloading(false)
        }else{
            setloading(false);
            // console.log(data.data.message)
            // console.log(data.data.message)

        }

    }
    return (
        <div>
              <div className="login">
                <div className="image">
                    {/* <img src="https://task-apps-client.vercel.app/assets/Login-XRROANEj.png" alt="" width={"400px"}/> */}
                </div>
                <form onSubmit={submithandler} className="loginpage" >
                    <h1 style={{color:"#3368C0",fontFamily: "Pacifico,serif"}}>Login </h1>
                    <label htmlFor="">Email:</label><br />
                    <input type="email" value={email} name="email" onChange={(e) => { setEmail(e.target.value) }} style={{backgroundColor:"whitesmoke",padding:"20px",border:"solid 1px black",color:"black"}}  id="" placeholder='Enter a email' /><br /><br />
                    <label htmlFor="" >Password:</label><br />
                    

                    <input type="password" name='password' value={password}
                        onChange={(e) => { setPassword(e.target.value) }} style={{backgroundColor:"whitesmoke",padding:"20px",border:"solid 1px black",color:"black"}}  id="" placeholder='Enter a Password'   /><br /><br />
                    <p>New User?<NavLink to="/signup"> Register here.. </NavLink></p>
                     <button style={{width:"100px",height:"42px",background:"#3368C0",color:"white",borderRadius:"6px",fontWeight:"600",border:"none"}}>Login</button>
                </form>
            </div>
            
        </div>
    );
}

export default Login;