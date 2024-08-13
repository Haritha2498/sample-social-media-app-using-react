import React, { useEffect, useState } from 'react'

import Logout from '../Component/Logout'
import Postcard from '../Component/Postcard';

const Mypostspsge = () => {


    const[username,setusername]=useState('')
    const [posts,setposts]=useState([]);

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




  useEffect(()=>{
      const fetchposts=async ()=>
      {
        try{
          const res=await fetch('/api/myposts');
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
      <h2 className="text-xl font-bold mb-6">{username.username}</h2>

      <a href="/main">
      <button className="w-full bg-blue-600 text-white py-2 mb-4 rounded hover:bg-blue-700">
        Home
      </button></a>
      
      <a href="/post">
      <button className="w-full bg-blue-600 text-white py-2 mb-4 rounded hover:bg-blue-700">
        Add New Post
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
      <Logout/>
    </button>
  </div>


<div className="w-5/6 p-6  overflow-auto bg-blue-100">
  <h1 className='text-3xl  text-blue-600  '>Your Posts...</h1>



    {/* {
      posts.map((eachpost)=>(
        <Postcards property={eachpost}/>
      ))
    } */}

    {posts === null ? (
          <p>Loading posts...</p>
        ) : posts.length === 0 ? (
          <p className='mt-10 ml-10 text-center font-bold'>You haven't made any posts yet. Start by adding a new one!</p>
        ) : (
          posts.map((eachpost) => <Postcard key={eachpost.id} property={eachpost} />)
        )}
  
  
  
  
  </div>


  </div>
    
    </>
  )
}

export default Mypostspsge