import React, { useEffect } from 'react'
import { useState } from 'react';
import Commentcards from './Commentcards';
import { useNavigate } from 'react-router-dom';

const Postcard = ({property}) => {

  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState('');
  const navigate=useNavigate();
  
  const id=property._id;

  


  const handleCommentToggle = () => {
    setShowCommentBox(!showCommentBox);
  };

  const handleCommentSubmit = async(e) => {
    e.preventDefault();
    const formData= {
    id,
    comment    
  };

    console.log(formData,"comment data")
    const res = await fetch("/api/newcomment", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
    // Handle comment submission logic here (e.g., send to the server)
    console.log('Comment submitted:', comment);
    setComment(''); // Clear the text area after submission
    setShowCommentBox(false); // Optionally hide the comment box after submitting

    if(res.ok){
    
    }
  };


    const deletecomment=async()=>{
        console.log("delete")
        const confirm=window.confirm('Sure want to delete comment');
        if(!confirm) return;
        console.log("delete")
        const res= await fetch(`/api/deletecomment/${id}`,{
        method:'DELETE'
        });
    }

  return (
    <>
    
    <div className="bg-white shadow-lg rounded-lg p-4 border-2 mt-4 mx-[10%]">
        <button className="text-blue-600 hover:text-blue-800 float-right" onClick={deletecomment} >Delete Post</button>
      <div className="flex items-center mb-4">
        <span className="font-bold">{property.email}</span>
      </div>
      <div className="mb-4">
        <p>{property.title}</p>
      </div>

      <div className="mb-4">
        <p>{property.imageUrl}(image)</p>
      </div>
      <div className="mb-4 border-2">
        <p>{property.content}</p>
      </div>
      <div className="flex justify-around">
        <button className="text-blue-600 hover:text-blue-800">Like</button>
        <button className="text-blue-600 hover:text-blue-800"  onClick={handleCommentToggle}>Comment</button>


      </div>


       {showCommentBox && (
        <div className="mt-4 bg-blue-50">
            
          <textarea
            className="w-[90%] p-2 border rounded mb-2 mx-[5%] mt-4"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 ml-4"
            onClick={handleCommentSubmit}
          >
            Submit
          </button>
          <h1 className='mt-4 font-bold ml-4'>All comments...</h1>

          {
          property.comments.map((eachpost)=>(
          <Commentcards property={eachpost}/>
          ))
          }


        </div>
      )}

    </div>
    
    
    </>
  )
}

export default Postcard


