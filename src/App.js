import {useState} from 'react';

import { Routes, Route } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import Header from './components/Header';
import NavBar from './components/NavBar';
import EntryPage from './pages/EntryPage';
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
        <header>
          <Header/>
          <NavBar user={user} setUser={setUser}/>  
        </header>
        <div className='main-body' >
          <Routes>
            <Route path='/entries' element={<EntryIndexPage />}/>
            <Route path='/entries/new' element={<NewEntryPage/>}/>
            <Route path='/entries/:id' element={<EntryPage/>}/>
          </Routes>
        </div>
      </>
     : 
      <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
