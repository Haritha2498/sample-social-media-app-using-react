import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Settingspage = () => {


    const [username, setUserName] = useState("");
  
  const [useremail, setEmail] = useState("");
  const [userdob, setuserdob] = useState("");
  const [password, setPassword] = useState("");

  const [user, setuser] = useState('');
  const navigate = useNavigate();

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

  

  const settingSubmit = async (userDetails) => {
    const res = await fetch("/api/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });
    // return;
    console.log(res);
    if (res.ok) {
      toast.success(`updated`);
      return navigate("/profile");
    } else {
      toast.error(`Error in updation`);
      return navigate("/setting");
    }
  };

  const submitform = (e) => {
    console.log('wedx')
    e.preventDefault();
    const userDetails = {
      
      username,     
      userdob,
      password
    };

    settingSubmit(userDetails);
  };


  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">Menu</h2>
          <ul className="mt-6 space-y-4">
            <li>
              <a href="/main" className="text-blue-500 font-semibold">Home</a>
            </li>
            <li>
              <a href="/profile" className="text-blue-500 font-semibold">Profile</a>
            </li>
            <li>
              <a href="/settings" className="text-blue-500 font-semibold">Settings</a>
            </li>
            {/* Add more navigation items as needed */}
          </ul>
        </div>
      </div>

      {/* Settings Form */}
      <div className="flex-1 p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Settings</h2>
          <form onSubmit={submitform}>
            <div className="mb-4">

              <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email 
              </label>
              <div className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100">
                {user.useremail}
              </div>
            </div>

              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder={user.username}
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                placeholder={user.userdob}
                value={userdob}
                onChange={(e) => setuserdob(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder='Enter new password '
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settingspage;
