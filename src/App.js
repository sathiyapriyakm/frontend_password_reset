import {Route, Routes,Navigate } from 'react-router-dom';
import './App.css';
import { Register } from './Register';
import { Login } from './Login';
import { NotFound } from './NotFound';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/Register" element={<Register/>}/>  
      <Route path="/Login" element={<Login/>}/>
      <Route path="/" element={<Navigate replace to="/Login"/>}/>
      <Route path="/404-Page" element={<NotFound/>}/>
      <Route path="*" element={<Navigate replace to="/404-Page"/>}/>
      </Routes>
      
    </div>
  );
}

export default App;


