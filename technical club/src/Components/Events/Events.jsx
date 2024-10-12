import React,{useEffect} from "react";

const Events = () => {
    useEffect(()=>{
        document.title = "TCS | Events";
    },[])
    return(
        <div>Events</div>
    );
}
export default Events;