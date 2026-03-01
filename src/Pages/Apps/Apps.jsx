import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Appp from '../ap/appp';

const Apps = () => {
    const [search, setSearch] = useState('');
    const loaderData=useLoaderData();
    const [loading, setLoading] = useState(false);

    const filteredApps = loaderData.filter(app =>
  app.title.toLowerCase().includes(search.toLowerCase()) 
);
    
    return (
        <div className='w-full bg-base-200'>
        <div className='w-[95%] mx-auto py-10 '>
            <h1 className='text-2xl font-bold text-center mb-4'>Our All Applications</h1>
            <p className='text-xs text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between'>
            <h3 className='text-lg font-bold'>({filteredApps.length}) Apps Found</h3>
            <input
                type="text"
                placeholder="Search apps..."
                className="input input-bordered w-48 md:w-64"
                value={search}
                onChange={(e) => {
                    setLoading(true);
                    setSearch(e.target.value);

                    setTimeout(() => {
                        setLoading(false);
                    }, 300);
                    }}
                />
            </div>
            {loading && (
            <div className="flex justify-center py-4 items-center gap-2">
                <h1 className='text-2xl font-bold'>L</h1>
                <img 
                src="/logo.png" 
                className="h-10 w-10 animate-spin" 
                alt="Loading"
                />
              <h1 className='text-2xl font-bold'>OADING</h1>
            </div>
            )}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
            {
                filteredApps.length === 0 && !loading ? (
                <div className="col-span-full text-center py-10">
                    <h2 className="text-4xl font-bold text-red-500">
                    No App Found
                    </h2>
                </div>
                ) : (
                filteredApps.map((app) => (
                    <Appp key={app.id} app={app}></Appp>
                ))
                )
            }
</div>
        </div>
        </div>
    );
};

export default Apps;