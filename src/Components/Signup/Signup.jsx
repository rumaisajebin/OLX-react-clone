import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import { UserAuth } from '../../store/FirebaseContext';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const { signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signUp(username, email, phone, password);
      navigate('/');
    } catch (error) {
      console.log(error);
      setError("Invalid credentials");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-200 to-blue-400">
      <div className="bg-white p-8 shadow-md rounded-md w-[500px]">
        <Link to='/'>
          <img className="mx-auto mb-6" src={Logo} alt="Logo" width="100" height="100" />
        </Link>
        <form onSubmit={handleSubmit}>
          {error && <p className='mt-2 p-2 bg-red-500 rounded'>{error}</p>}
          <div className="mb-4">
            <label htmlFor="fname" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="fname"
              name="name"
              placeholder="Username"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="phone"
              name="phone"
              placeholder="Phone"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>

          <button className="w-full h-10 bg-blue-800 text-white font-bold hover:bg-white hover:text-blue-800 hover:border-2 hover:border-blue-800">
            Signup
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account? <Link to='/signin' className="text-blue-600"><span>Signin</span></Link>
        </p>
      </div>
    </div>
  );
}