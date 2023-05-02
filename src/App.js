import {useState} from 'react';

import { Routes, Route } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import NavBar from './components/NavBar';
import EntryPage from './pages/EntryPage';
import LandingPage from './pages/LandingPage';
import NewEntryPage from './pages/NewEntryPage';
import EntryIndexPage from './pages/EntryIndexPage';

import { getUser } from './utilities/users-service';

import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
     { user ? 
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/home' element={<LandingPage/>}/>
        <Route path='/entries' element={<EntryIndexPage />}/>
        <Route path='/entries/new' element={<NewEntryPage/>}/>
        <Route path='/entries/:id' element={<EntryPage/>}/>
      </Routes>
      </>
     : 
      <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
