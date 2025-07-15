import React from 'react';

function Contact(props) {
    return (
        <div>
            <div style={{marginTop:"80px",marginLeft:"10px"}}  className="contactpage">
                <div className="outer" >
                    <h1 style={{textAlign:"center",fontFamily:"serif",fontWeight:"bold",marginRight:"70px"}}>Contact Me</h1>
                    <h5 style={{textAlign:"center",marginRight:"90px"}}>We’d love to hear from you! Whether you have questions, feedback, or need <br />  assistance, feel free to reach out. Our team is here to help and will get back to you <br /> as soon as possible. Let’s stay connected!</h5>
               
                   
                <form className='contectform' action="">
                    
                    <label htmlFor="">Name</label><br />
                    <input type="text" style={{fontSize:"15px",padding:"20px"}} placeholder='Enter the name here...'/><br /><br />
                    <label htmlFor="">Email</label> <br />
                    <input type="email" style={{fontSize:"15px",padding:"20px"}} name="" id=""  placeholder='Enter Your Email...'/><br /><br />
                    <label htmlFor="">Phone</label><br />
                    <input type="number"style={{fontSize:"15px",padding:"20px"}}  name="" id=" " placeholder='Enter Your moblie number' /><br /><br />
                    <label htmlFor="">Subject</label><br />
                    <input type="text" style={{fontSize:"15px",padding:"20px"}} placeholder='Let us know how we can help you'/><br /><br />
                    <label htmlFor="">Your message</label><br />
                    <input type="text"style={{fontSize:"15px",height:"170px",padding:"20px"}} placeholder='Leave a comment...' />  <br /><br /> 
                    <button  className='btnform'>Send Message </button>
                </form>
                 </div>
            </div>
        </div>

    );
}

export default Contact;