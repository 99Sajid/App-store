import React from 'react';
import { Link } from 'react-router';

const ErrorsApp = () => {
    return (
        <div className=' text-center py-10 '>
            <img src="/App-Error.png" className='mx-auto py-10'></img>
            <h2 className='text-3xl font-bold'>OOPS!! APP NOT FOUNDOops, App not found!</h2>
            <p className='py-2 text-xs'>The app you are requensting is not found in our system,please try another apps</p>
            <Link to='/' className='btn px-6 bg-purple-600 text-white'>Go Back</Link>
        </div>
    );
};

export default ErrorsApp;