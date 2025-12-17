import { FaTasks } from "react-icons/fa";


function HeroSection(){
    return (
    <div className="flex flex-col h-dvh   ">
        <div className=" h-20 bg-white flex items-center fixed top-0 left-0 right-0  ">
            <div className="flex bg-white text-blue-600 text-3xl ml-4">
                <p className="mt-1 mr-1 font-bold"><FaTasks /></p>
                <p className=" font-bold">Task</p>

            </div>
        </div>
        
        <div className=" flex-1 flex items-center bg-gray-100" >
            <div className="flex-1  flex flex-col    ml-5">
              <p className=" text-4xl font-bold text-blue-600 mb-4 xl:text-7xl">Streamline Your Software Management Tasks</p>
              <p className="text-gray-500 text-xl leading-9 xl:w-2/3 ">TaskFlow is the all-in-one platform that helps development teams manage, track, and collaborate on software tasks efficiently. From ideation to deployment, we've got you covered.</p>
              <button className="flex items-center justify-center rounded-full mt-5 w-52 h-12 bg-blue-600 text-white font-bold  ">Get Started For Free</button>
            </div>
        </div>
        

    </div>
    )

}

export default HeroSection;