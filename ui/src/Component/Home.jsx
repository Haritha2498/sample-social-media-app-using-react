import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
     <div className="flex flex-col min-h-screen justify-between bg-gray-100">
      <header className="text-center py-8 bg-violet-500 text-white">
        <h1 className="text-4xl font-bold">Welcome to Social Vision</h1>
      </header>
      <h2 className="text-2xl mx-auto mt-20">Share your Thoughts...</h2>

      <main className="flex flex-col items-center justify-center flex-grow">
        
        <div className="space-x-4">
          <Link
            to="/signup"
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
          >
            Sign In
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Log In
          </Link>
        </div>
      </main>
      </div>
    
    </>
  )
}

export default Home