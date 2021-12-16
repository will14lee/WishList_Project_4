import '../App.css';
import LoginForm from '../components/LoginForm'
import SignUpForm from './SignUpForm';
import { Routes, Route } from "react-router-dom" 
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/signup" element={<SignUpForm/>} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
