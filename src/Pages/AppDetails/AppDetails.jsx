import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { LuDownload } from "react-icons/lu";
import { MdStarRate } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import BarCharts from '../BarChart/BarCharts';
import { AddToStoredDB } from '../../LocalStorageData/LocalStorageData';
import { toast } from 'react-toastify';

const AppDetails = () => {
    const [disable,setDisable]=useState(false);
    const {id} = useParams();
    const datas=useLoaderData();
    useEffect(() => {
  const storedApps = JSON.parse(localStorage.getItem("Installed")) || [];

  if (storedApps.includes(parseInt(id))) {
    setDisable(true);
  }
}, [id]);
    
   
    const AppDetailsData=datas.find((AppsData)=>AppsData.id===parseInt(id));
  const handleInstallation = () => {
    AddToStoredDB(parseInt(id));
  setDisable(true);
  toast("Installed Successfully");
};
    
    
   
    return (
        <div className='w-full bg-base-200'>
        <div className=' p-4 '>
       <div className='flex gap-4 py-8 border-b border-gray-200'>
       <div><img src={AppDetailsData.image} className='min-h-full'></img></div>
       <div className='w-full'>
       <h2 className='text-2xl font-bold'>{AppDetailsData.title}:{AppDetailsData.companyName}</h2>
       <p className='text-sm p-4 border-b border-gray-300'>Developed by {AppDetailsData.companyName}</p>
       <div className='flex justify-between my-3 gap-2 w-full'>
                   <h3 className=' flex-1 text-green-500 '><LuDownload/><span className='text-xs text-black'>Downloads<br></br></span><span className='font-bold text-2xl text-black'>{AppDetailsData.downloads/100000}M</span></h3>
                   <h3 className=' flex-1 text-amber-500'><MdStarRate/><span className='text-xs text-black'>Average Rating<br></br></span><span className='font-bold text-2xl text-black'>{AppDetailsData.ratingAvg}</span></h3>
                   <h3 className=' flex-1 text-purple-500'><BiSolidLike /><span className='text-xs text-black'>Total Reviews<br></br></span><span className='font-bold text-2xl text-black'>{AppDetailsData.reviews/1000}K</span></h3>
                   </div>
                   <button className='text-lg font-semibold btn rounded-lg bg-green-600 'disabled={disable} onClick={()=>handleInstallation(id)}>{disable ? "Installed" : `Install Now (${AppDetailsData.size}MB)`}</button>
       </div>
       </div>
       <div className='py-6 border-b border-b-gray-200'>
       
       <BarCharts data={AppDetailsData.ratings}></BarCharts> 
       
       </div>
            </div>
            <div className='my-6'>
            <h1 className='text-xl font-bold'>Description</h1>
            <p className='text-sm'>{AppDetailsData.description}</p>
            
            </div>
        </div>
    );
};

export default AppDetails;