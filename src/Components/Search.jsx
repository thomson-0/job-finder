
import { CiSearch } from "react-icons/ci";
import { AiOutlineCloseCircle, AiOutlineHome } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Filter from "./Filter";

function Search() {
  return (
    <section className="pt-10">
      <div className="bg-blue-500 p-8 rounded-md shadow-md shadow-gray-300">
        <form className="flex flex-col gap-5 md:flex-row items-center justify-between bg-white p-4 rounded-md">
          <div className="flex relative items-center flex-grow">
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search job here..."
              className="pl-10 pr-8 py-2 w-full rounded-l bg-white text-blue-300 focus:outline-none"
            />
            <AiOutlineCloseCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <div className="flex relative items-center flex-grow">
            <AiOutlineHome className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search by location..."
              className="pl-10 pr-8 py-2 w-full rounded-l bg-white text-blue-300 focus:outline-none"
            />
            <AiOutlineCloseCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <div className="flex relative items-center flex-grow">
            <HiOutlineLocationMarker className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search by company..."
              className="pl-10 pr-8 py-2 w-full rounded-l bg-white text-blue-300 focus:outline-none"
            />
            <AiOutlineCloseCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <button
            type="button"
            className="px-4 py-2 mt-2 md:mt-0 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none self-start md:self-center"
          >
            Search
          </button>
        </form>

        <Filter/>
      </div>
    </section>
  );
}

export default Search;
