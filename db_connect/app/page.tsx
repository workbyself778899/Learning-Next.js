"use client"
import axios from "axios";
import { useEffect } from "react";

export default function HomePage(){
 useEffect(()=>{
   const connect = async() => {
    try {
      const res = await axios.get('/api/user')
      console.log("res", res)
    } catch (error) {
      console.log("error", error)
    }
  }
  connect();
 },[])
  return(
    <div className="">
      Db connection 
    </div>
  )
}