import {Route, Routes,Navigate } from 'react-router-dom';
import './App.css';
import { Register } from './Register';
import { Login } from './Login';
import { NotFound } from './NotFound';
import { ForgetPassword } from './ForgetPassword';
import { ChangePassword } from './ChangePassword';
import { Welcome } from './Welcome';
import { PasswordUpdated } from './PasswordUpdated';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/Register" element={<Register/>}/>  
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Welcome" element={<Welcome/>}/>
      <Route path="/ForgetPassword" element={<ForgetPassword/>}/>
      <Route path="/PasswordUpdated" element={<PasswordUpdated/>}/>
      <Route path="/" element={<Navigate replace to="/Login"/>}/>
      <Route path="/404-Page" element={<NotFound/>}/>
      <Route path="*" element={<Navigate replace to="/404-Page"/>}/>
      <Route path="/reset-password/:id/:token" element={<ChangePassword/>} />
      </Routes>
      
    </div>
  );
}

export default App;


