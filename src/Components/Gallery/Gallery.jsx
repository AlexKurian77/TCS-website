import React,{useEffect} from "react";

const Gallery = () => {
    useEffect(()=>{
        document.title = "TCS | Gallery";
    },[])
    return(
        <div>Gallery</div>
    );
}
export default Gallery;