import logo from '../../assets/img/logo.png';

export default function Navbar() {
    return (
        <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-600 my-5">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="#" className="flex">
                    <img src={logo} alt="logo" />
                </a>
                <ul className="flex justify-end space-x-2">
                    <li>
                        <a href="#" className="text-blood font-product bg-white border-solid border-2 border-blood hover:bg-blood hover:text-white focus:ring-4 focus:ring-red-200 font-medium rounded-md text-sm p-10 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-blood dark:focus:ring-red-800">Login</a>
                    </li>
                    <li>
                        <a href="#" className="text-white font-product bg-blood hover:bg-red-600 focus:ring-4 focus:ring-red-200 font-medium rounded-md text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-blood dark:focus:ring-red-800">Register</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}