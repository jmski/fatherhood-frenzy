import Image from 'next/image';
import React from 'react';
import { Gradient } from './webgl';

const LandingPage = () => {

  React.useEffect(() => {
    var gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-600">
      <canvas id="gradient-canvas" />
      <Image src="/images/ff-banner-white-medium.png" width="470" height="470" alt="Banner"/>
      <h1 className="text-white text-4xl tracking-widest">coming soon</h1>
    </div>
  )
}

export default LandingPage;