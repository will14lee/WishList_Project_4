import '../App.css';
import { Routes, Route } from "react-router-dom" 
import LoginForm from '../components/LoginForm'
import SignUpForm from './SignUpForm';
import Home from './Home'
import Items from '../pages/Items'
import Recipients from '../pages/Recipients'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/signup" element={<SignUpForm/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/items" element={<Items/>}/>
        <Route path="/recipients" element={<Recipients/>}/>
      </Routes>
    </div>
  );
}

export default App;
