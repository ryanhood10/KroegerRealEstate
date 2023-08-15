import React, {useRef} from "react";
import Laptop from "./assets/pictures/MarkingImage2.png";
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
        
        <div ref={newsletterRef}></div>
        </div>
    )
}

export default Engagement