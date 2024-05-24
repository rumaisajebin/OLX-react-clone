import Home from './Pages/Home.jsx'
import { AuthContextProvider } from './store/FirebaseContext.jsx'
import { Routes, Route } from 'react-router-dom'
import SignupPage from './Pages/Signup.jsx'
import LoginPage from './Pages/Login.jsx'
import CreatePage from './Pages/Create.jsx'
import ViewPost from './Pages/ViewPost.jsx'
import './App.css'
import AuthenticatedUserRedirect from './Components/Redirects/AuthenticatedUserRedirect.jsx'
import ProtectedRoute from './Components/Redirects/ProtuctedRoute.jsx'

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<AuthenticatedUserRedirect><SignupPage /></AuthenticatedUserRedirect>} />
          <Route path='/signin' element={<AuthenticatedUserRedirect><LoginPage /></AuthenticatedUserRedirect>} />
          <Route path='/create' element={<ProtectedRoute><CreatePage /></ProtectedRoute>} />
          <Route path='/post/:id' element={<ViewPost />} />
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
