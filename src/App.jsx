import {Routes, Link, Route} from 'react-router-dom';
import SignupForm from './pages/SignUpForm';
import LoginForm from './pages/LoginForm';
import './App.css';

const App = () => {
  return (
    <>
      <nav>
        <Link to="/signup">Go to Signup</Link>
        <Link to='/sellerlogin'>Login </Link>
      </nav>
      <Routes>
        <Route path="/sellerlogin" element={<LoginForm/>} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </>
  )
}

export default App
