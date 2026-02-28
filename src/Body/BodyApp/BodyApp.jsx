import React from 'react';
import Appp from '../../Pages/ap/appp'
import { Link } from 'react-router-dom';

const BodyApp = ({loderData}) => {
   
    return (
        <div className='py-10 px-10 w-full mx-auto bg-base-200'>
            <h1 className='text-xl font-bold text-center'>Trending Apps</h1>
            <p className='texl-sm text-center'>Explore All Trending Apps on the Market developed</p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mb-3'>
            {
                loderData.map((app)=><Appp key={app.id} app={app}></Appp>)
            }
            </div>
            <div className='text-center mt-8'>
            <Link to='/App' className='btn text-xl font-bold bg-purple-600'>Show All</Link>
            </div>

        </div>
    );
};

export default BodyApp;