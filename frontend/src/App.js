import React,{ useContext } from 'react';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import AuthContext,{ AuthProvider } from './context/Authcontext';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Assessment from './pages/Assesments';
import JobRecommendations from './pages/JobRecommendation';
import SkillGapAnalysis from './pages/SkillGapAnalysis';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Register from './pages/Register';



const App = () => (


  <>
<div>
<AuthProvider>
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} /> 
    <Route path ="/register" element ={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/assessment" element={<Assessment/>} />
        <Route path="/job-recommendations" component={<JobRecommendations/>} />
        <Route path="/skill-gap-analysis" component={<SkillGapAnalysis/>} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
</div>
  </>
 
);

export default App;

