import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const Navbar = () => {

    const[username,setusername]=useState('')
  useEffect(()=>{

    const fetchusername=async ()=>
      {
        try{
          const res=await fetch ("api/username");
          const data=await res.json()
          console.log(data,"kkk");
          setusername(data)
        }
          catch (error){
            console.log("errorss",error)
          
        }
      }
      fetchusername();
      console.log("profile fetched")

  },[])
  return (
    <>
    
           
  <div className="w-1/6 bg-gray-100 p-6 flex flex-col justify-between">
    <div>
      <h2 className="text-xl font-bold mb-6">{username}</h2>
      <a href="/main">
      <button className="w-full bg-blue-600 text-white py-2 mb-4 rounded hover:bg-blue-700">
        Home
      </button></a>
      <a href="/profile">
      <button className="w-full bg-blue-600 text-white py-2 mb-4 rounded hover:bg-blue-700">
        Profile
      </button></a>
      <a href="/setting">
      <button className="w-full bg-blue-600 text-white py-2 mb-4 rounded hover:bg-blue-700">
        Settings
      </button></a>
    </div>
    <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
      Logout
    </button>
  </div>
    
     
    
    </>
  )
}

export default Navbar