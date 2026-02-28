import React from 'react';
import { LuDownload } from "react-icons/lu";
import { MdStarRate } from "react-icons/md";
import { RemveFromStoredDB } from '../../../LocalStorageData/LocalStorageData';

const InstalledApp = ({app,onRemove}) => {

    
    return (
        <div className='flex justify-between gap-4 my-4 shadow-2xl bg-base-100'>
        <div className='flex '>
          <img src={app.image} className='h-25 w-20'></img>
          <div>
        <h2 className='text-2xl font-bold'>{app.title}:{app.companyName}</h2>
        <div className='flex justify-between my-3 gap-2 w-full'>
            <h3 className='flex items-center gap-2 flex-1 text-green-500 '><LuDownload/><span className='font-semibold text-lg text-black'>{app.downloads/100000}M</span></h3>
            <h3 className='flex items-center gap-2 flex-1 text-amber-500'><MdStarRate/><span className='font-semibold text-lg text-black'>{app.ratingAvg}</span></h3>
            <h3 className=' flex-1 text-purple-500'><span className='font-semibold text-lg text-black'>{app.size}MB</span></h3>
        </div>
          </div>
        </div>
        <div className='flex mx-5 items-center'><button className='btn bg-green-400' onClick={()=>onRemove(app.id)}>Uninstall</button></div>
        </div>
    );
};

export default InstalledApp;