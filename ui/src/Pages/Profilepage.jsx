
import React, { useEffect, useState } from 'react';
import Logout from '../Component/Logout';

const Profilepage = () => {
  const [user, setuser] = useState('');

  useEffect(() => {
    const fetchusername = async () => {
      try {
        const res = await fetch('api/username');
        const data = await res.json();
        console.log(data);
        setuser(data);
      } catch (error) {
        console.log('Error:', error);
      }
    };
    fetchusername();
    console.log('Profile fetched');
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/6  p-6 flex flex-col justify-between">
        <div>
          <a href="/main">
            <button className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300 mb-4">
              Home
            </button>
          </a>
          <a href="/logout">
            <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300">
              <Logout/>
            </button>
          </a>
        </div>
      </div>

      {/* Profile Content */}
      <div className="flex items-center justify-center w-3/4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold mb-8 text-center">Profile</h2>
          
          <div className="mb-4">
            <div className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 inline-flex">
              <h2 className="mr-4 ml-4">Username:</h2> {user.username}
            </div>
          </div>
          
          <div className="mb-4">
            <div className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100">
              {user.useremail}
            </div>
          </div>
          
          <div className="mb-4">
            <div className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100">
              {user.userdob}
            </div>
          </div>
          
          <a href="/setting" className="text-blue-500 font-semibold">
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
              Update
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profilepage;

