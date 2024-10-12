import React,{useEffect} from "react";

const About = () => {
    useEffect(()=>{
        document.title = "TCS | About";
    },[])
    return(
        <div>About</div>
    );
}
export default About;