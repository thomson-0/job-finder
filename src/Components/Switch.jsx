

function Switch() {
  return (
    <div className="p-4 py-10  bg-slate-100 rounded-lg shadow-md">
      <div className="flex justify-between items-center gap-5 px-10">
        <h1 className="text-blue-500 text-2xl font-semibold">
          Ready to switch a carrier
          <br/>
          <span className="text-black">Let's get started</span>
        </h1>
     

        <button
        type="button"
        className="block  mt-6 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2 px-4 rounded-md focus:outline-none transition duration-300 ease-in-out"
      >
        Get Started
      </button>
      </div>
    
    </div>
  );
}

export default Switch;
