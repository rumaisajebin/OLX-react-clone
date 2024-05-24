import React, { useState } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import { UserAuth } from '../../store/FirebaseContext';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { user, signIn } = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signIn(email, password)
      navigate('/')
    } catch (error) {
      console.log(error);
      setError("Invalid email or password. Please try again...")
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-[500px]">
        <Link to='/'>
          <img className="mx-auto mb-6" src={Logo} alt="Logo" width="100" height="100" />
        </Link>

        <form onSubmit={handleSubmit}>
          {error && <p className='my-4 p-2 bg-red-500 font-medium text-white rounded'>{error}</p>}
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
            />
          </div>

          <button className="w-full rounded h-10 bg-blue-800 text-white font-bold hover:bg-white hover:text-blue-800 hover:border-2 hover:border-blue-800">
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Don't have an account? <Link to='/signup' className="text-blue-600"><span>Signup</span></Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
