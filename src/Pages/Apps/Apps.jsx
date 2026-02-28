import React from 'react';
import { useLoaderData } from 'react-router';
import Appp from '../ap/appp';

const Apps = () => {
    const loaderData=useLoaderData();
    
    return (
        <div className='w-full bg-base-200'>
        <div className='w-[95%] mx-auto py-10 '>
            <h1 className='text-2xl font-bold text-center mb-4'>Our All Applications</h1>
            <p className='text-xs text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between'>
            <h3 className='text-lg font-bold'>({loaderData.length}) Apps Found</h3>
            <input type="text" placeholder="Search apps..." className="input input-bordered w-48 md:w-64"/>  
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
            {
                loaderData.map((app)=><Appp key={app.id} app={app}></Appp>)
            }
            </div>
        </div>
        </div>
    );
};

export default Apps;