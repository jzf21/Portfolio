import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className=" shadow  m-4">
        <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
             
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">Jozef</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 ">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm sm:text-center ">
            © 2023{' '}
          
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer