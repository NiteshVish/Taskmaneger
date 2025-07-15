import React from 'react';
import '../assets/Style.css'
 




function Home(props) {
    return (
        <div className='mainbody'>
            <div className="first">
                <div className="text">
                    <h1 style={{ fontFamily: "Pacifico,serif",fontWeight:"bolder",fontSize:"50px" ,marginLeft:"70px"}}>Task Manager</h1>
                    <h2 style={{fontFamily: "var(--bs-font-sans-serif)",fontWeight:"bold",fontSize:"30px",marginLeft:"70px"}}>Simplify Your Workday with Smart Task <br /> Management.</h2>
                    <p style={{ color: "black",marginLeft:"70px" }}>Plan, organize, and execute tasks effortlessly with our intuitive tools—set <br /> priorities, track progress, and meet deadlines seamlessly.

                    </p>
                    <button className="btn1" style={{marginLeft:"70px"}}>Get Started</button>
                </div>
                <div className="img">
                    <img src="https://task-apps-client.vercel.app/assets/Hero-Dq9GjtoB.png" alt="" width={"600px"} height={"400px"} />
                </div>

            </div>
            <div className="second">
                <div className="box"><h1>+5,200 <br /></h1><p>Happy Users
                </p></div>
                <div className="box"><h1>+4,500<br /></h1><p>Paid Users


                </p></div>
                <div className="box"><h1>+10,000
                    <br /></h1><p>Viwers
                    </p></div>
                <div className="box"><h1>+15,000
                    <br /></h1><p> Total Task
                    </p></div>
            </div>

            <div className="third">
                <div className="text">
                    <h1>Create and Manage <br /> Tasks Effortlessly</h1>
                    <h5 style={{ color: "black" }} >Add tasks with just a few clicks, assign deadlines, set <br /> priorities, and track progress in real time.</h5>
                </div>
                <div className="img">
                    <img src="https://task-apps-client.vercel.app/assets/Add-CJ7-u2yK.png" alt="" width={"600px"} height={"400px"} />
                </div>
            </div>

            <div className="fourth">
                <div className="img">
                    <img src="https://task-apps-client.vercel.app/assets/Read-DpExJjCs.png" alt="" width={"400px"} height={"400px"} />
                </div>
                <div className="text">
                    <h1>Read and Stay on <br /> Top of Every Task</h1>
                    <h5 style={{ color: "black" }}>Quickly review task details, deadlines, and priorities in <br /> one organized view.</h5>
                </div>



            </div>

            <div className="fifth">

                <div className="text">
                    <h1>Check Tasks with<br /> Ease</h1>
                    <h5 style={{ color: "black" }}>Track progress effortlessly by marking completed tasks <br />and reviewing pending ones..</h5>
                </div>

                <div className="img">
                    <img src="https://task-apps-client.vercel.app/assets/Check-CeHOafp9.png " alt="" width={"600px"} height={"600px"} />
                </div>

            </div>

            <div className="six">

                <div className="img">
                    <img src="https://task-apps-client.vercel.app/assets/Delete-DrilGtWo.png" alt="" width={"500px"} height={"400px"} />
                </div>

                <div className="text">
                    <h1> Delete Tasks with<br /> Confidence</h1>
                    <h5 style={{ color: "black" }}>Easily remove tasks you no longer need, keeping your <br />workspace clutter-free.</h5>
                </div>

            </div>

            <div className="seven">

                <div className="text">
                    <h1>Pin Tasks for Quick<br /> Access</h1>
                    <h5 style={{ color: "black" }}>Keep your most important tasks front and center by <br />pinning them to the top.</h5>
                </div>

                <div className="img">
                    <img src="https://task-apps-client.vercel.app/assets/Pin-BlR10jqK.png" alt="" width={"500px"} height={"400px"} />
                </div>

            </div>
            <div className="Customer">
                <h1 style={{ textAlign: "center", color: "#3368C0" , fontFamily: "Pacifico,serif",fontWeight:"bolder",fontSize:"35px" }}>Customer Review</h1>
                <div className="mainbox">
                    <div className="costomer-box"><p>This task manager app is a game-changer! It’s incredibly easy to use, and the intuitive design helps me plan, organize, and track tasks effortlessly. I love the ability to set priorities, deadlines, and <br />reminders. It’s perfect for staying productive and ensuring nothing gets overlooked. Highly recommend it to everyone! <br /> <span style={{fontWeight:"bold"}}>by Jeny</span> <br />4.5 ⭐⭐⭐⭐</p></div>

                    <div className="costomer-box"><p>This app has made managing my daily tasks so much easier! The clean interface and helpful features like reminders and progress tracking keep me on top of everything. It’s reliable, efficient, <br />and customizable to suit my needs. A must-have tool for staying organized and productive! <br /><span style={{fontWeight:"bold"}}>by Samantha K</span> <br />4.5 ⭐⭐⭐⭐</p></div>

                    <div className="costomer-box"><p>A fantastic tool for staying organized! The ability to create, prioritize, and track tasks is seamless. It’s perfect for both personal and work use, and the reminders ensure I never miss a deadline. <br />Highly satisfied with this app! <br /><span style={{fontWeight:"bold"}}>by Priya Sharma

                    </span> <br />4.5 ⭐⭐⭐⭐</p></div>

                    <div className="costomer-box"><p>This task manager simplifies everything! I love how I can easily manage my schedule, set deadlines, and check off completed tasks. It’s user-friendly, efficient, and keeps me productive<br />throughout the day. Definitely worth using! <br /><span style={{fontWeight:"bold"}}>by Emily Green</span> <br />4.5 ⭐⭐⭐⭐</p></div>
                </div>
            </div>

            <div className="contact">
                <h1>Join Our News Letter</h1>
                <h3>Signup for our email newspaper to get updates and more</h3><br />
                <input type="text" name="" id="" style={{width:"70%",height:"45px"}} /><br /><br />
                <button style={{width:"180px" , height:"45px" ,color:"white",background:"#3368C0" ,fontWeight:"bold",border:"none",borderRadius:"6px",fontSize:"20px",padding:"2px"}}>Subscribe</button>

            </div>


        </div>
    );
}

export default Home;