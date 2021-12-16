import '../App.css';
import { Routes, Route } from "react-router-dom" 
import LoginForm from '../components/LoginForm'
import SignUpForm from './SignUpForm';
import Home from './Home'
import Items from '../pages/Items'
import Recipients from '../pages/Recipients'
import RecipientsForm from '../pages/RecipientsForm';
import ItemsForm from '../pages/ItemsForm';
import EditItem from '../pages/EditItem';
import EditRecipient from '../pages/EditRecipient';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/signup" element={<SignUpForm/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/items" element={<Items/>}/>
        <Route path="/items/new" element={<ItemsForm/>}/>
        <Route path="/items/edit" element={<EditItem/>}/>
        <Route path="/recipients" element={<Recipients/>}/>
        <Route path="/recipients/new" element={<RecipientsForm/>}/>
        <Route path="/recipients/edit" element={<EditRecipient/>}/>

      </Routes>
    </div>
  );
}

export default App;
