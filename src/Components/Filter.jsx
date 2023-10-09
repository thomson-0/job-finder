import { useState } from "react";

function Filter() {
  const [sortBy, setSortBy] = useState("default");
  const [type, setType] = useState("all");
  const [level, setLevel] = useState("all");

 
  const clearAll = () => {
    setSortBy("default");
    setType("all");
    setLevel("all");
  };

  const sortOptions = [
    { label: "Sort By", value: "default" },
    { label: "Date", value: "date" },
    { label: "Popularity", value: "popularity" },
  ];

  const typeOptions = [
    { label: "Type", value: "all" },
    { label: "Full-Time", value: "fulltime" },
    { label: "Part-Time", value: "parttime" },
  ];

  const levelOptions = [
    { label: "Level", value: "all" },
    { label: "Beginner", value: "beginner" },
    { label: "Senior", value: "senior" },
    { label: "Expert", value: "expert" },
  ];

  return (
    <section className="flex flex-col py-5 items-center justify-center">
      <div className="w-full md:w-auto text-center flex justify-center">
        <form className="flex flex-col gap-3 md:flex-row">
          <div className="flex flex-col md:flex-row items-start">
            <label htmlFor="sortBy" className="text-white font-medium mb-2 px-2 py-1">
              Sort By:
            </label>
            <div className="relative">
              <select
                id="sortBy"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-2 py-1 w-full rounded bg-white text-gray-500 focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start">
            <label htmlFor="type" className="text-white font-medium mb-2 px-2 py-1">
              Type:
            </label>
            <div className="relative">
              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="px-2 py-1 w-full rounded bg-white text-gray-500 focus:outline-none"
              >
                {typeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start">
            <label htmlFor="level" className="text-white font-medium mb-2 px-2 py-1">
              Level:
            </label>
            <div className="relative">
              <select
                id="level"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="px-2 py-1 w-full rounded bg-white text-gray-500 focus:outline-none"
              >
                {levelOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="button"
            className="px-2 py-2 my-auto text-white   focus:outline-none"
            onClick={clearAll}
          >
            Clear All
          </button>
        </form>
      </div>
    </section>
  );
}

export default Filter;
