import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner'
import BodyApp from './BodyApp/BodyApp';
import { useLoaderData } from 'react-router';


const Home = () => {
    const loderData=useLoaderData();
    
    return (
        <div>
         
            <HomeBanner></HomeBanner>
            <BodyApp loderData={loderData}></BodyApp>
             
            
        </div>
    );
};

export default Home;