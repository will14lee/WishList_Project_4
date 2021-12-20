import '../App.css';
import { Routes, Route } from "react-router-dom" 
import LoginForm from '../components/LoginForm'
import SignUpForm from './SignUpForm';
import Home from './Home'
import Items from '../pages/Items'
import RecipientsForm from '../pages/RecipientsForm';
import ItemsForm from '../pages/ItemsForm';
import EditItem from '../pages/EditItem';
import EditRecipient from '../pages/EditRecipient';
import ItemDetails from '../pages/ItemDetails'
import RecipientDetails from '../pages/RecipientDetails'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/signup" element={<SignUpForm/>} />
        <Route path="/:recipients_id/items" element={<Items/>}/>
        <Route path="/:recipients_id/items/new" element={<ItemsForm/>}/>
        <Route path="/:recipients_id/items/:id" element= {<ItemDetails/>}/>
        <Route path="/:recipients_id/items/:id/edit" element={<EditItem/>}/>
        <Route path="/new" element={<RecipientsForm/>}/>
        <Route path="/:id" element={<RecipientDetails/>}/>
        <Route path="/:id/edit" element={<EditRecipient/>}/>

      </Routes>
    </div>
  );
}

export default App;
