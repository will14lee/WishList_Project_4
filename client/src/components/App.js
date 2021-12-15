import '../App.css';
import NavBar from './NavBar';
import LoginForm from '../components/LoginForm'
import SignUpForm from './SignUpForm';
import Items from '../pages/Items';
import Recipients from '../pages/Recipients';
import { Routes, Route } from "react-router-dom" 

function App() {
  return (
    <div >
      <h1>Wishlist Creator</h1>
      <NavBar/>
      <Routes>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/signup" element={<SignUpForm/>} />
      </Routes>
      {/* <LoginForm/>
      <SignUpForm/>
      <Items/>
      <Recipients/> */}
    </div>
  );
}

export default App;
