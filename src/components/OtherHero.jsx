import React from 'react'
import RealEstateBanner from './assets/pictures/RealEstateBanner2.png';



const OtherHero = () => {
    return (
        <div className="w-full mx-auto p-4">
            <div className='max-h-[500px] relative'>
                {/* overlay */}
                <div className='absolute w-full h-full text-gray-200 max-h-[250px] bg-black/20 flex flex-col justify-center z-0'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold text-white' >Your<span className='text-blue-700'> Trusted Partner</span></h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold text-white' >in <span className='text-blue-700'> Commercial Real Estate</span></h1>
                </div>
                    <img className='w-full max-h-[250px] object-cover' src={RealEstateBanner}  alt="robot1" />
            </div>
        </div>
    )
}

export default OtherHero