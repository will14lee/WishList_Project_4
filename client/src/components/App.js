import '../App.css';
import NavBar from './NavBar';
import LoginForm from '../components/LoginForm'
import SignUpForm from './SignUpForm';
import Items from '../pages/Items';
import Recipients from '../pages/Recipients';
import { Routes, Route } from "react-router-dom" 
import Home from './Home'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/signup" element={<SignUpForm/>} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
