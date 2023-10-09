import  { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

function Nav() {
  const [showMenu, setShowMenu] = useState(false);

 
  return (
    <div>
      <nav className="flex justify-between items-center p-5">
        <div>
          <p className="font-light text-2xl">
            <strong className="text-blue-500 font-bold">Job</strong> Finder
          </p>
        </div>
        <div className="">
          <div className="">
            <ul
              className={`${
                showMenu ? 'block' : 'hidden'
              } md:flex flex justify-center items-center gap-x-5`}
            >
              <li className="text-gray-500 hover:text-blue-500">Job</li>
              <li className="text-gray-500 hover:text-blue-500">Companies</li>
              <li className="text-gray-500 hover:text-blue-500">About</li>
              <li className="text-gray-500 hover:text-blue-500">Contact</li>
              <li className="text-gray-500 hover:text-blue-500">Blog</li>
              <li className="text-gray-500 hover:text-blue-500">Login</li>
              <li className="text-gray-500 hover:text-blue-500">Register</li>
            </ul>
            <RxHamburgerMenu
              className="block md:hidden"
              
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
