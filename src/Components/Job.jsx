import { AiOutlineFieldTime } from "react-icons/ai";
import {data} from '../Const'

function Job() {
  return (
    <section className="py-10 justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
                data.map((item,index)=>(
                    <div key={index} className="bg-white max-w-sm p-4 rounded-lg shadow-md mb-4 hover:bg-blue-100 transition duration-300 ease-in-out">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="mb-4 lg:mb-0">
                        <h2 className="text-xm font-bold">{item.job_title}</h2>
                        <p className="text-gray-500 mt-3 font-normal">{item.location}</p>
                      </div>
                      <div className="flex items-center text-gray-500 pb-5">
                        <AiOutlineFieldTime className="mr-2 font-bold" />
                        <span className="self-start">{item.posted_hours_ago} Hrs ago </span>
                      </div>
                    </div>
                    <div className="border-t border-black hover:border-blue-500 mt-4 pt-4">
                      <p className="text-gray-700">
                       {item.description}
                      </p>
                    </div>
                    <div className="flex items-center mt-4">
                      <img
                        src={item.company_logo}
                        alt="Company Logo"
                        className="mr-2 w-8 h-8 rounded-full"
                      />
                      <span className="text-sm font-bold">{item.company_name}</span>
                    </div>
                    <button
                      type="button"
                      className="block w-full mt-6 bg-blue-500 hover:bg-white hover:text-blue-500 text-white font-semibold py-2 px-4 rounded-md focus:outline-none transition duration-300 ease-in-out"
                    >
                      Apply Now
                    </button>
                  </div>

                ))
            }
    </section>
  );
}

export default Job;
