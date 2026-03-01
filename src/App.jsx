import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import { Outlet } from 'react-router-dom';
import { useNavigation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
function App() {
  const navigation = useNavigation();
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 1000); // show loader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className='w-full'>
       {pageLoading && (
          <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">L</h1>

              <img 
                src="/logo.png" 
                className="h-12 w-12 animate-spin"
                alt="Loading"
              />

              <h1 className="text-2xl font-bold">OADING</h1>
            </div>
          </div>
        )}
      <Navbar></Navbar>
      {navigation.state === "loading" && (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
    <div className="flex items-center gap-2">
      <h1 className="text-2xl font-bold">L</h1>

      <img 
        src="/logo.png" 
        className="h-12 w-12 animate-spin"
        alt="Loading"
      />

      <h1 className="text-2xl font-bold">OADING</h1>
    </div>
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
