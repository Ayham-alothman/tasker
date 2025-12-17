import { FaTasks } from "react-icons/fa";

function HowWork(){
    return(
        <div className="flex flex-col bg-gray-200 xl:h-dvh  ">

           <div className=" h-20 bg-white flex items-center ">
               <div className="flex bg-white text-blue-600 text-3xl ml-4">
                   <p className="mt-1 mr-1 font-bold"><FaTasks /></p>
                   <p className=" font-bold">How It Works Section</p>
   
               </div>
           </div>


            <div className=" h-32 flex flex-col items-center justify-center text-blue-600  ">
                <p className="text-3xl font-bold xl:text-6xl">How It Works</p>
                <div className=" bg-blue-600 h-[2px] w-24 mt-2 xl:w-60"></div>
            </div>

            <div className="flex flex-col items-center xl:flex-row xl:justify-center xl:space-x-4  ">
                
                <div className="flex flex-col items-center w-96 mb-6 bg-white py-10  rounded-lg  ">
                    <div className=" mb-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                    <p className=" text-xl font-bold text-gray-800 mb-3">Set Up Your Project</p>
                    <p className="w-80 leading-8 text-base text-gray-700">Create your project, define tasks, assign team members, and set deadlines. Import existing projects from your favorite tools.</p>
                </div>

                <div className="flex flex-col items-center w-96 mb-6 bg-white py-10 rounded-lg  ">
                    <div className=" mb-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                    <p className=" text-xl font-bold text-gray-800 mb-3">Track & Collaborate</p>
                    <p className="w-80 leading-8 text-base text-gray-700">Monitor progress in real-time, collaborate with your team, and manage dependencies across multiple tasks and sprints.</p>
                </div>

                <div className="flex flex-col items-center w-96 mb-6 bg-white py-10 rounded-lg  ">
                    <div className=" mb-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                    <p className=" text-xl font-bold text-gray-800 mb-3">Analyze & Improve</p>
                    <p className="w-80 leading-8 text-base text-gray-700">Review performance metrics, generate reports, and optimize your development process for future projects.</p>
                </div>

         


            </div>

        </div>
    )
}
export default HowWork;