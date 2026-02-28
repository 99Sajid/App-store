import React, { useEffect,useState } from 'react';
import { useLoaderData } from 'react-router';
import InstalledApp from './InstalledApp/InstalledApp';
import { RemveFromStoredDB } from '../../LocalStorageData/LocalStorageData';
import { toast } from 'react-toastify';

const Installation = () => {
    const loaderdata=useLoaderData();
    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        const storedApps = JSON.parse(localStorage.getItem("Installed")) || [];

        const filteredApps = loaderdata.filter(app =>
            storedApps.includes(app.id)
        );

        setInstalledApps(filteredApps);
    }, [loaderdata]);
    const handleRemove = (id) => {
    RemveFromStoredDB(id);

    // update UI instantly
    setInstalledApps(prev =>
        prev.filter(app => app.id !== id)
    );
    toast('Uninstalled Successfully');
};
    return (
        <div className='bg-base-200'>
        <div className='w-[90%] mx-auto '>
            <div className='text-center mx-auto py-10'>
            <h1 className='text-3xl font-bold'>Your Installed Apps</h1>
            <p className='text-xs'>Explore All Trending Apps on the Market Developed by us</p>
            </div>
            <div>
            <div>
            <h1 className='text-xl font-semibold pb-2'>{installedApps.length===0?'No Apps Found':`(${installedApps.length})Apps Found`}</h1>

            </div>
            <div className=''>
            {
                installedApps.map((app)=><InstalledApp key={app.id} app={app}  onRemove={handleRemove}></InstalledApp>)
            }
            </div>
            </div>
            </div>
        </div>
    );
};

export default Installation;