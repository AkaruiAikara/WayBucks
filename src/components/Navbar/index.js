import logo from '../../assets/img/logo.png';

export default function Navbar() {
    return (
        <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-600 my-5">
            <div className="flex flex-wrap justify-between items-center">
                <a href="#" className="flex">
                    <img src={logo} alt="logo" />
                </a>
                <ul className="flex justify-end space-x-2">
                    <li>
                        <button type="button" data-modal-toggle="loginModal" className="text-blood font-product bg-white border-solid border-2 border-blood hover:bg-blood hover:text-white focus:ring-4 focus:ring-red-200 font-medium rounded-md text-sm p-10 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-blood dark:focus:ring-red-800">Login</button>
                    </li>
                    <li>
                        <button type="button" data-modal-toggle="registerModal" className="text-white font-product bg-blood hover:bg-red-600 focus:ring-4 focus:ring-red-200 font-medium rounded-md text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-blood dark:focus:ring-red-800">Register</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}