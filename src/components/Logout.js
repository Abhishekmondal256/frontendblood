import React, { useEffect ,useContext} from "react";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../App";
const Logout=()=>{

    const {state,dispatch}=useContext(UserContext);
    const navigate=useNavigate();
    useEffect(()=>{
    fetch("https://backendblood.onrender.com/logout",{
method:"GET",
headers:{
Accept:"Application/json",
"Content-Type":"application/json"

},
credentials:"include"
    }).then((res)=>{
        dispatch({type:"USER",payload:false});
        navigate("https://backendblood.onrender.com/login",{replace:true});
if(!res.status===200){
const error=new Error(res.error);
throw error;
}
    }).catch((err)=>{
console.log(err);
    })

    });

}
export default Logout;
