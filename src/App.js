import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';

//Hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

//Context
import { AuthProvider } from './context/useAuthContext';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import CreatePost from './pages/CreatePost/CreatePost'
import Dashboard from './pages/Dashboard/Dashboard'
import Search from './pages/Search/Search';
import Post from './pages/Post/Post';
import EditPost from './pages/EditPost/EditPost';



function App() {

  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication()

  const loadingUser = user === undefined;

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      setUser(user)
    })
  },[auth])

  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar/>
            <div className="container">
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Search' element={<Search/>}/>
                <Route path='/posts/:id' element={<Post/>}/>
                <Route path='/Login' element={!user ? <Login/> : <Navigate to='/'/>}/>
                <Route path='/Register' element={!user ? <Register/> : <Navigate to='/'/>}/>
                <Route path='/posts/edit/:id' element={user ? <EditPost/> : <Navigate to='/Login'/>}/>
                <Route path='/CreatePost' element={user ? <CreatePost/> : <Navigate to='/Login'/>}/>
                <Route path='/Dashboard' element={user ? <Dashboard/> : <Navigate to='/Login'/>}/>
              </Routes>
            </div>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
