import React,{useEffect} from "react";

const Sponsor = () => {
    useEffect(()=>{
        document.title = "TCS | Sponsor";
    },[])
    return(
        <div>Sponsor</div>
    );
}
export default Sponsor;