import React from 'react'

const Commentcards = ({property}) => {
  return (
    <>
    <div className="bg-white shadow-lg rounded-lg p-4 border-2 mt-4 ">
      {/* <div className="flex items-center mb-4">
        <span className="font-bold">A</span>
      </div> */}
      <div className="mb-4 font-bold">
        <p>{property.commenterEmail}</p>
      </div>
      <div className="mb-4">
        <p>{property.commentContent}</p>
      </div>
      </div>
    
    </>
  )
}

export default Commentcards