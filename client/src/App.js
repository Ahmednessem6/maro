import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import HomeAuth from './Admin/AdminAuth/HomeAuth';
import LoginUser from './User/UserAuth/userlogin';
import { Form } from './User/UserForm/Form';
import LoginAdmin from './Admin/AdminAuth/loginAdmin';
import SignupAdmin from './Admin/AdminAuth/Signupadmin';
import QuestionCreator from './Admin/AdminDashboard/QuestionCreator';
import EquationsTable from './Admin/AdminDashboard/EquationsTable';
import HomeDash from './Admin/AdminDashboard/HomeDashBoard';
import App from './temp/App';


export default function Appp() {
  const[url,setUrl]=useState("")
  useEffect(()=>{
    setUrl(localStorage.getItem("FormUrl"))
  })
  return (
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={< Home/>}  />
      <Route path="/Admin" element={<HomeAuth/>}  />
      <Route path="/questions" element={<QuestionCreator/>}  />
      <Route path="/Equations_table" element={<EquationsTable/>}  />
      <Route path="/surveme" element={<App/>}  />

      <Route path="/UserLogin" element={<LoginUser/>}  />
      <Route path="/pie-chart" element={<App/>}  />

      <Route path=":url"element={<Form/>}  />
      <Route path="/LoginAdmin" element={<LoginAdmin/>}  />

      <Route path="/SignUp" element={<SignupAdmin/>} key="signup" />
      <Route path="/HomeDash" element={<HomeDash/>}  />


    </Routes>
  </BrowserRouter>
   
  );
}