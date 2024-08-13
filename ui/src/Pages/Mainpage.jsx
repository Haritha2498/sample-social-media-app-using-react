import React, { useEffect, useState } from 'react'
import Postcards from '../Component/Postcards';
import Logout from '../Component/Logout';

const Mainpage = () => {

  const[username,setusername]=useState('')
  const [posts,setposts]=useState([]);
  useEffect(()=>{

    const fetchusername=async ()=>
      {
        try{
          const res=await fetch ("api/username");
          const data=await res.json()
          console.log(data,"kkk");
          setusername(data.username)
        }
          catch (error){
            console.log("errorss",error)
          
        }
      }
      fetchusername();
      console.log("profile fetched")

  },[])


  useEffect(()=>{
      const fetchposts=async ()=>
      {
        try{
          const res=await fetch('/api/allposts');
          const data=await res.json()
          // console.log(data);
          setposts(data);
        }
        catch(error){
          console.log("error",error)
        }
        
      }
      fetchposts();

      
  },[])
console.log(posts,"allposts")


    return (
    <>
    <div className="flex h-screen">
  {/* Left Section */}
  <div className="w-1/6 bg-gray-100 p-6 flex flex-col justify-between">
    <div>
      <h2 className="text-xl font-bold mb-6">{username}</h2>
      
      <a href="/post">
      <button className="w-full bg-blue-600 text-white py-2 mb-4 rounded hover:bg-blue-700">
        Add New Post
      </button></a>
      <a href="/mypost">
      <button className="w-full bg-blue-600 text-white py-2 mb-4 rounded hover:bg-blue-700">
        My Posts
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
      {/* Logout */}
      <Logout/>
    </button>
  </div>

  {/* Right Section */}
  <div className="w-3/4 p-6  overflow-auto bg-blue-100">
  <h1 className='text-xl  text-blue-600  '>Most recent Posts...</h1>



    {
      posts.map((eachpost)=>(
        <Postcards property={eachpost}/>
      ))
    }
  
  
  
  
  </div>


</div>

    
    </>
  )
}

export default Mainpage