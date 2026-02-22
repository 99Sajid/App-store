import React from 'react';
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa6";
import heroimg from '../../assets/hero.png'
const HomeBanner = () => {
    return (
        <div>
        <div className="hero bg-base-200 min-h-screen">
  <div className="pt-4 text-center">
    <div className="max-w-md">
      <h1 className="text-4xl font-bold">We Build <br></br><span className='text-blue-300'>Product App</span></h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <div className='flex gap-2 justify-center p-4'>
      <button className="btn "><FaGooglePlay />Google Play</button>
      <button className="btn "><FaAppStore />App Store</button>
      </div>
<img src={heroimg} className='pt-2'></img>

    </div>
    
  </div>
</div>
<div className='bg-blue-600 w-full text-center p-4'>
<div><h1 className='text-2xl font-bold text-white'>Trusted By Million, Build For You</h1></div>
<div className='flex gap-6 text-xs text-white justify-center p-4'>
<div>
<p >Total Download</p>
<h1 className='text-3xl font-bold'>29.6M</h1>
<p>21% more than last month</p>
</div>
<div>
<p>Total Download</p>
<h1 className='text-3xl font-bold'>29.6M</h1>
<p>21% more than last month</p>
</div>
<div>
<p>Total Download</p>
<h1 className='text-3xl font-bold'>29.6M</h1>
<p>21% more than last month</p>
</div>
</div>

</div>
            
        </div>
    );
};

export default HomeBanner;