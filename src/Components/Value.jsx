import { FcBrokenLink } from "react-icons/fc";
import { FcBullish,FcDribbble } from "react-icons/fc";




function Value() {
  return (
    <section className="py-10">
        <div className="w-full  p-4">
          <div>
            <h1 className="text-center md:text-left font-bold text-3xl">
              The value that holds us true <br /> and to account
            </h1>
          </div>
        </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 ">
        

        <div className="p-4">
          <div className="max-w-xs">
            <div className="my-5">
              <span className="flex justify-start items-center gap-3">
                <FcBrokenLink className="bg-blue-100 rounded rounded-t-md object-contain text-3xl p-2 text-white" />
                simplicity
              </span>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi quos architecto sequi ipsa reiciendis maiores autem totam eius.</p>
            </div>
          </div>
        </div>

        <div className=" p-4">
          <div className="max-w-xs">
            <div className="my-5">
              <span className="flex justify-start items-center gap-3">
                <FcBullish className="bg-green-100 rounded rounded-t-md object-contain text-3xl p-2 text-white" />
                simplicity
              </span>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi quos architecto sequi ipsa reiciendis maiores autem totam eius.</p>
            </div>
          </div>
        </div>

        <div className=" p-4">
          <div className="max-w-xs">
            <div className="my-5">
              <span className="flex justify-start items-center gap-3">
                <FcDribbble className="bg-pink-100 rounded rounded-t-md object-contain text-3xl p-2 text-white" />
                simplicity
              </span>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi quos architecto sequi ipsa reiciendis maiores autem totam eius.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Value;
