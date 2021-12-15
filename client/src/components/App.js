import '../App.css';
import NavBar from './NavBar';
import LoginForm from '../components/LoginForm'
import SignUpForm from './SignUpForm';

function App() {
  return (
    <div className="App">
      <h1>Wishlist Creator</h1>
      <NavBar/>
      <LoginForm/>
      <SignUpForm/>
    </div>
  );
}

export default App;
