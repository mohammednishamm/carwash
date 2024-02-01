import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import { AuthContextProvider } from './context/AuthContext';
import Booking from './components/Booking';
import Slogin from './Shop/Slogin';
import Sdata from './Shop/Sdata';
import { ScontextProvider } from './Shop/Scontext';
import Shistory from './Shop/Shistory';
import Ulogin from './User/Ulogin';
import { UcontextProvider } from './User/Ucontext';
import Udata from './User/Udata';

function App() {
  return (
    <div className="App">
      <UcontextProvider>
      <ScontextProvider>
      <AuthContextProvider>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/slogin' element={<Slogin/>}/>
        <Route path='/sdata' element={<Sdata/>}/>
        <Route path='/shistory' element={<Shistory/>}/>
        <Route path='/ulogin' element={<Ulogin/>}/>
        <Route path='/udata' element={<Udata/>}/>
      </Routes>
      </BrowserRouter>
      </AuthContextProvider>
      </ScontextProvider>
      </UcontextProvider>
    </div>
  );
}

export default App;
