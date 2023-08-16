import React, {useRef, useState} from "react";
import Laptop from "./assets/pictures/RealEstateImage.png";
import { useNavigate } from 'react-router-dom';
import Image1 from './assets/pictures/contact-publix.jpg';
import Image2 from './assets/pictures/wallgreens-slider.jpg';
import Image3 from './assets/pictures/belk-services.jpg';
import Image4 from './assets/pictures/kroger-slider.jpg';
import Image5 from './assets/pictures/wallmart-slider.jpg';



const Engagement = () => {

    const images = [Image1, Image2, Image3, Image4, Image5];
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handleNextSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePrevSlide = () => {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

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
                            className="bg-blue-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:bg-blue-400">Contact Us</button>
                </div>

            </div>
            

           


            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                
                <div className="flex flex-col justify-center ">
                <h1 className="text-center md:text-4xl sm:text-3xl text-2xl font-bold py-2">Our Impressive Portfolio</h1>
                    <p className="text-center md:text-xl sm:text-xl text-xl justify-center  font-semibold">Throughout our journey, we've orchestrated numerous successful transactions, showcasing our prowess in various services:</p>
                    <br></br>
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
                {/* Slideshow  */}
                    <div className="max-w-[500px] mx-auto my-4 rounded-xl overflow-hidden">
                        <img className="w-full" src={images[activeIndex]} alt={`Slide ${activeIndex}`} />

                        <div className="flex justify-between mt-4">
                            <button
                            onClick={handlePrevSlide}
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                            >
                            Previous
                            </button>
                            <button
                            onClick={handleNextSlide}
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                            >
                            Next
                            </button>
                        </div>
                    </div>
            </div>

            <div className="max-w-[1240px] mx-auto py-16 px-4">
                <p className="text-center text-2xl font-semibold pb-6">Meet Steve Kroeger: A Visionary Leader</p>

                <div className="flex flex-col justify-center">
                    <p className="text-lg font-bold">Leading the charge is Steve H. Kroeger, a seasoned real estate broker specializing in retail/commercial properties since 1985. As the President and founder of Kroeger Real Estate Company, Steve brings a wealth of experience to the table. His dedication has fostered a company that excels in retail brokerage, spanning land and building sales, as well as tenant and landlord representation. His remarkable journey includes pivotal roles at CBRE and Weston Companies.</p>
                    
                    <p className="mt-6">Driving Major Transactions</p>
                    <p>Steve's impact extends to notable transactions over the past decade:</p>
                    <ul className="list-disc list-inside pl-6 mt-2">
                    <li className="mb-2">Indian Lake Village, Hendersonville, TN: A 75-acre project featuring prominent anchors like Wal-Mart and Home Depot, complemented by esteemed names such as Chili’s, Steak n Shake, Carrabba’s Italian Grill, and others.</li>
                    <li className="mb-2">Greensboro Village, Gallatin, TN: A dynamic mixed-use project boasting a Publix-anchored shopping center, retail shops building, Walgreen’s Drug Store, and a 10-screen Movie Theater.</li>
                    <li className="mb-2">White House Crossing, White House, TN: A 55-acre Wal-Mart anchored development, encompassing retail shops and multiple outparcels.</li>
                    <li>Home Depot: Spearheading more than 11 transactions, including a strategic ten-parcel assemblage in Nashville.</li>
                    </ul>
                    
                    <p className="mt-6">Wide Reach, Stellar Achievements</p>
                    <p>Our reach extends to various locations, including Clarksville, Covington, Franklin, Gallatin, Hendersonville, Knoxville, Nashville, Pulaski, Smyrna, and Winchester. Notably, our involvement with Walgreen’s spans more than 15 transactions.</p>
                    
                    <p className="mt-6">A Dynamic Future</p>
                    <p>Since 2010, our impact has been felt across Spring Hill, TN. We've secured over 30 sales and lease transactions, representing property owners in deals with renowned names like Shell, O’Reilly’s Auto Parts, Waffle House, and more.</p>
                    
                    <p className="mt-6">Community and Beyond</p>
                    <p>Beyond real estate, Steve remains an active member of the International Council of Shopping Centers for over 20 years. He's also a dedicated participant in local organizations, including Brentwood United Methodist Church, Currey Ingram Academy, and The University of Tennessee Alumni Association.</p>
                </div>
                </div>

            
        
        <div ref={newsletterRef}></div>
        </div>
    )
}

export default Engagement