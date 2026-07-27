import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollTop() {

const [show,setShow]=useState(false);

useEffect(()=>{

window.addEventListener("scroll",()=>{

setShow(window.scrollY>400);

});

},[]);

return show ? (

<button

onClick={()=>window.scrollTo({

top:0,

behavior:"smooth"

})}

className="fixed bottom-8 right-8 bg-cyan-500 p-4 rounded-full"

>

<FaArrowUp/>

</button>

):null;

}