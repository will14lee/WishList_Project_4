import '../App.css';
import NavBar from './NavBar';
import LoginForm from '../components/LoginForm'
import SignUpForm from './SignUpForm';
import Items from '../pages/Items';
import Recipients from '../pages/Recipients';

function App() {
  return (
    <div >
      <NavBar/>
      <h1>Wishlist Creator</h1>
      <LoginForm/>
      <SignUpForm/>
      <Items/>
      <Recipients/>
    </div>
  );
}

export default App;
