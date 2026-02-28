import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import { Outlet } from 'react-router-dom';
import { useNavigation } from "react-router-dom";
import React from 'react';
import { ToastContainer } from 'react-toastify';
function App() {
  const navigation = useNavigation();

  return (
    <>
      <div className='w-[90%] mx-auto'>
      <Navbar></Navbar>
      {navigation.state === "loading" && (
        <div className="text-center py-4">
          Loading...
        </div>
      )}
      
      <Outlet />
      
    
      <Footer></Footer>
      <ToastContainer/>
      </div>
      
    </>
  )
}

export default App;
