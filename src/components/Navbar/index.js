import logo from '../../assets/img/logo.png';

export default function Navbar() {
    return (
        <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-600 my-5">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="#" className="flex">
                    <img src={logo} alt="logo" />
                </a>
                <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full sm:block sm:w-auto" id="mobile-menu">
                <ul className="flex justify-end mt-10 sm:flex-row sm:space-x-2 sm:mt-0 sm:text-sm sm:font-medium">
                    <li>
                    <a href="#" className="text-blood font-product bg-white border-solid border-2 border-blood hover:bg-blood hover:text-white focus:ring-4 focus:ring-red-200 font-medium rounded-md text-sm p-10 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-blood dark:focus:ring-red-800">Login</a>
                    </li>
                    <li>
                    <a href="#" className="text-white font-product bg-blood hover:bg-red-600 focus:ring-4 focus:ring-red-200 font-medium rounded-md text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-blood dark:focus:ring-red-800">Register</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}