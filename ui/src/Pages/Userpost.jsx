import React, { useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logout from '../Component/Logout';

const Userpost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // const [posts, setPosts] = useState([]);
   const [image, setImage] = useState(null);

  const navigate = useNavigate();


  const[username,setusername]=useState({})
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

  

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Set the selected image file
  };

  const postSubmit = async (e) => {
    e.preventDefault();

    const formData= {
    title,
    content,
    image
  };

  const res = await fetch("/api/newpost", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

console.log(formData,"postdetails");


  console.log("added sucessfully")

  if(res.ok){
    // toast.success("Post Added");
    return navigate("/mypost");
  }
  else{
    // toast.error("Post cannot be added")
  }
  }

  return (
       <div className="flex h-screen">
  {/* Left Section */}
  <div className="w-1/6 bg-gray-100 p-6 flex flex-col justify-between">
    <div>
      <h2 className="text-xl font-bold mb-6">{username.username}</h2>
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
      <Logout/>
    </button>
  </div>
    <div className="w-5/6  bg-gray-100 p-6 flex flex-col items-center">
     
      <div className="w-full mt-20 max-w-xl bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={postSubmit}>
        <h1 className="text-2xl font-bold mb-4">Create a Post</h1>

        <input
          type="text"
          placeholder="Post Title"
          className="w-full p-2 mb-4 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Post Content"
          className="w-full p-2 mb-4 border rounded h-32"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <h1>select any image</h1>
        <input
              type="file"
              accept="image/*"
              className="w-full mb-4"
              onChange={handleImageChange}
            />


        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Post
        </button>
        </form>
      </div>

      {/* <div className="w-full max-w-xl mt-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white p-4 mb-4 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="mt-2">{post.content}</p>
          </div>
        ))}
      </div> */}
    </div>
    </div>
  );
};

export default Userpost;
