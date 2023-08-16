import React, {useRef} from "react";
import Laptop from "./assets/pictures/RealEstateImage.png";
import { useNavigate } from 'react-router-dom';


const Engagement = () => {

    const navigate = useNavigate();

    const handleViewSolutions = () => {
        navigate('/solutions');
      };
  
      const newsletterRef = useRef(null);


    return(
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4 rounded-xl" src={Laptop} alt="/" />
                <div className="flex flex-col justify-center ">
                    <p className="text-blue-700 text-xl font-bold"> Kroger Real Estate Company </p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Trusted Commercial Real Estate Solutions</h1>
                    <p> 
                    Looking for exceptional commercial real estate services? Look no further than Kroeger Real Estate Company. As a leading full-service firm, we specialize in land owner representation, landlord representation, tenant representation, property management, and development analysis. Our proven track record and expertise cater to a diverse clientele, offering comprehensive solutions that exceed expectations.                    </p>
                    <p>Discover the Difference with Kroeger Real Estate Company – Your Ultimate Choice in Commercial Real Estate Excellence.</p>
                    <button onClick={() => {
                                newsletterRef.current.scrollIntoView({
                                behavior: "smooth",
                                });
                            }}
                            className="bg-blue-700 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-blue-400">Contact Us</button>
                </div>

            </div>
            

            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                
                <div className="flex flex-col justify-center ">
                    <p className="text-blue-700 text-xl font-bold"> Kroger Real Estate Company </p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Trusted Commercial Real Estate Solutions</h1>
                    <p> 
                    Looking for exceptional commercial real estate services? Look no further than Kroeger Real Estate Company. As a leading full-service firm, we specialize in land owner representation, landlord representation, tenant representation, property management, and development analysis. Our proven track record and expertise cater to a diverse clientele, offering comprehensive solutions that exceed expectations.                    </p>
                    <p>Discover the Difference with Kroeger Real Estate Company – Your Ultimate Choice in Commercial Real Estate Excellence.</p>
                    
                </div>

                <div className="flex flex-col justify-center ">
                    <p className="text-blue-700 text-xl font-bold"> Kroger Real Estate Company </p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Trusted Commercial Real Estate Solutions</h1>
                    <p> 
                    Looking for exceptional commercial real estate services? Look no further than Kroeger Real Estate Company. As a leading full-service firm, we specialize in land owner representation, landlord representation, tenant representation, property management, and development analysis. Our proven track record and expertise cater to a diverse clientele, offering comprehensive solutions that exceed expectations.                    </p>
                    <p>Discover the Difference with Kroeger Real Estate Company – Your Ultimate Choice in Commercial Real Estate Excellence.</p>
                    
                </div>

            </div>


            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                
                <div className="flex flex-col justify-center ">
                <h1 className="text-center md:text-4xl sm:text-3xl text-2xl font-bold py-2">Our Impressive Portfolio</h1>
                    <p className="text-center md:text-xl sm:text-xl text-xl justify-center text-blue-700 font-semibold">Throughout our journey, we've orchestrated numerous successful transactions, showcasing our prowess in various services:</p>
                        <div className="flex flex-wrap justify-center">
                            <ul className="font-semibold  text-2xl grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 text-blue-700">
                            <li className="flex items-center">
                                <span className="mr-2">Property owner representation</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">Landlord representation</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">Tenant representation</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">Surplus property disposition</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">Investment sales</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">Development and Investment services</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">Planning and Zoning Services</span>
                            </li>
                            </ul>
                            </div>
                    
                </div>
                <img className="w-[500px] mx-auto my-4 rounded-xl" src={Laptop} alt="/" />

            </div>
            
        
        <div ref={newsletterRef}></div>
        </div>
    )
}

export default Engagement