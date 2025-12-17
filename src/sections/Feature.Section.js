import { FaTasks } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";




function FeatureSection(){
    return(
    <div className="flex flex-col h-dvh ">
        <div className=" h-20 bg-white flex items-center ">
            <div className="flex bg-white text-blue-600 text-3xl ml-4">
                <p className="mt-1 mr-1 font-bold"><FaTasks /></p>
                <p className=" font-bold">Features Section</p>

            </div>
        </div>

        <div className="flex-1 flex flex-col  ">
            <div className=" h-32 flex flex-col items-center justify-center text-blue-600  ">
                <p className="text-3xl font-bold xl:text-6xl">Project Planning</p>
                <div className=" bg-blue-600 h-[2px] w-24 mt-2 xl:w-60"></div>
            </div>

            <div className="flex-1 flex flex-col items-center   ">
                <div className="flex-1 flex flex-col items-center  w-96 xl:w-1/2 ">
                  <p className="text-5xl text-blue-600 mb-12"><FaChartPie /></p>
                  <p className="text-xl text-gray-700 leading-9 ml-6">Visualize your software development lifecycle with intuitive project boards, timelines, and milestones tracking.</p>
                </div>
            </div>
        </div>

    </div>)
}
export default FeatureSection;