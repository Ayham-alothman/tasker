import { FaTasks } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";



function Footer(){
    return(
        <div className="flex flex-col bg-slate-800">

           <div className=" h-20  flex items-center ">
               <div className="flex  text-white text-3xl ml-4">
                   <p className="mt-1 mr-1 font-bold"><FaTasks /></p>
                   <p className=" font-bold">Footer</p>
   
               </div>
           </div>

            <div className="flex flex-col mb-20 xl:flex-row xl:justify-center xl:space-x-20">
            
              <div>
  
               <div className=" ml-5 mb-5">
                <p className="text-white text-xl">Quick Links</p>
                <div className="w-12 h-1 ml-1 bg-blue-600"></div>
               </div>
  
               <div className="flex flex-col ml-5">
                  <a className="text-white hover:ml-2 cursor-pointer mb-2">About </a>
                  <a className="text-white hover:ml-2 cursor-pointer">Privacy Policy</a>
  
               </div>
  
              </div>
              

              <div className="mt-10 xl:mt-0">

                <div className=" ml-5 mb-5">
                 <p className="text-white text-xl">Contact</p>
                 <div className="w-12 h-1 ml-1 bg-blue-600"></div>
                </div>

                <div className="ml-6 space-y-4">

                    <div className="flex space-x-3 ">
                        <p className=" text-blue-600 text-2xl flex justify-center items-center"><BiLogoGmail /></p>
                        <p className="text-gray-600">info@taskflow.com</p>
                    </div>

                    <div className="flex space-x-3 ">
                        <p className=" text-blue-600 text-2xl flex justify-center items-center"><FaPhoneAlt /></p>
                        <p className="text-gray-600">+963934371587</p>
                    </div>

                    <div className="flex space-x-3 ">
                        <p className=" text-blue-600 text-2xl flex justify-center items-center"><IoLocation /></p>
                        <p className="text-gray-600"> 123 Tech Street, Damascues, CA</p>
                    </div>
                    
                    
                </div>

              </div>


           </div>

        </div>
    )

}

export default Footer;