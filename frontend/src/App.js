import Home from './components/Home';
import ReactDOM from 'react-dom/client';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import AddLivreForm from './components/AddLivreForm';
import LivreList from './components/LivreListe';
import EditLivreForm from './components/EditLivreForm';
import AddUserForm from './components/UserForm';
import UserList from './components/UserList';
import Authors from './Pages/authors/Authors';
import Books from './Pages/books/Books';
import Contact from './Pages/contact/contact';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AdminHome from './components/AdmineHome';
import LivreCard from './components/LivreCard';
import Footer from './components/Footer';



function App() {
  
    const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
    
    <Header />
      <Routes>
        <Route path={'/'} element={<Home />}> </Route>
        <Route path = "/books" element = {<Books />} > </Route>
        <Route path = "/contact" element = {<Contact />} > </Route>
        <Route path = "/users" element = {<AddUserForm />} > </Route>
       
       
        
        <Route path = "/livres" element = {<AddLivreForm/>} > </Route>
        <Route path = "/livres/add" element = {<LivreList/>} > </Route>
        <Route path = "/livres/edit/:id" element = {<EditLivreForm />} > </Route>
        
        <Route path = "/users/add" element = {<UserList />} > </Route>
        <Route path = "/authors" element = {<Authors />} > </Route>
        <Route path = "/admine" element = {<AdminHome />} > </Route>
        <Route path = "/books1" element = {<LivreCard/>} > </Route>
       
      </Routes>
      <Footer />
    </BrowserRouter>

); 
 
}

export default App;
