import React,{useEffect} from "react";

const Contact = () => {
    useEffect(()=>{
        document.title = "TCS | Contact";
    },[])
    return(
        <div>Contact</div>
    );
}
export default Contact;