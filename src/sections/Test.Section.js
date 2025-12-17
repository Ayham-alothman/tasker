import { FaTasks } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

function Testimonial(){
    return(
        <div className="flex flex-col h-dvh ">
            
            <div className=" h-20 bg-white flex items-center ">
               <div className="flex bg-white text-blue-600 text-3xl ml-4">
                   <p className="mt-1 mr-1 font-bold"><FaTasks /></p>
                   <p className=" font-bold">Testimonial Section</p>
   
               </div>
           </div>

           <div className=" h-32 my-6 flex flex-col items-center justify-center   ">
                <p className="text-3xl font-bold xl:text-6xl">What Our Clients Say</p>
                <div className=" bg-blue-600 h-[2px] w-24 mt-2 xl:w-60"></div>
            </div>

           <div className="flex-1 flex flex-col pl-16 xl:pl-0 xl:items-center   ">

            <p className=" w-96 mb-3 text-lg font-light leading-8 xl:w-1/2">TaskFlow has revolutionized how our development team manages projects. We've seen a 40% increase in productivity since implementation. The intuitive interface and powerful collaboration features are game-changers.</p>

            <div className="flex xl:mt-4 ">
                <div className="flex items-center justify-center mr-4 text-4xl text-blue-600"><p><FaUserAlt /></p></div>
                <div className=" ">
                    <p>Sarah Johnson</p>
                    <p>CTO at TechSolutions Inc.</p>
                </div>
            </div>
            

           </div>


        </div>
    )
}

export default Testimonial;