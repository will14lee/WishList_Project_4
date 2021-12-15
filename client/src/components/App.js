import '../App.css';
import NavBar from './NavBar';
import LoginForm from '../components/LoginForm'
import SignUpForm from './SignUpForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Items from '../pages/Items';

function App() {
  return (
    <div className="App">
      <h1>Wishlist Creator</h1>
      <NavBar/>
      {/* <Router> */}
        {/* <Routes> */}
          {/* <Route> */}
            <LoginForm/>
          {/* </Route> */}
          {/* <Route> */}
            <SignUpForm/>
          {/* </Route> */}
          {/* <Route> */}
            <Items/>
          {/* </Route> */}
        {/* </Routes> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
