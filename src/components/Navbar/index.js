import { Link } from 'react-router-dom'

import logo from '../../assets/img/logo.png';
import avatar from '../../assets/img/avatar.png';
import shopbasket from '../../assets/img/shopbasket.png';
import profileicon from '../../assets/img/profileicon.svg';
import logouticon from '../../assets/img/logouticon.svg';

function Leftnav(props) {
    const isLogin = props.isLogin;
    if (isLogin) {
        return (
            <ul className="flex justify-end items-center space-x-12">
                <li>
                <button id="basketDropdown" data-dropdown-toggle="basket-dropdown">
                        <img src={shopbasket} alt="avatar" />
                </button>
                </li>
                <li>
                    <button id="profileDropdown" data-dropdown-toggle="profile-dropdown">
                        <img src={avatar} alt="avatar" />
                    </button>
                    <div id="profile-dropdown" className="hidden z-30 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                        <ul className="py-3" aria-labelledby="profileDropdown">
                            <li>
                                <a href="#" className="block py-4 px-4 text-md text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    <div className="flex items-center gap-4">
                                        <img src={profileicon} alt="" />
                                        <span>Profile</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-4 px-4 text-md text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    <div className="flex items-center gap-4">
                                        <img src={logouticon} alt="" />
                                        <span>Logout</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        )
    } else {
        return (
            <ul className="flex justify-end space-x-2">
                <li>
                    <button type="button" data-modal-toggle="loginModal" className="text-blood font-product bg-white border-solid border-2 border-blood hover:bg-blood hover:text-white focus:ring-4 focus:ring-red-200 font-medium rounded-md text-sm p-10 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-blood dark:focus:ring-red-800">Login</button>
                </li>
                <li>
                    <button type="button" data-modal-toggle="registerModal" className="text-white font-product bg-blood border-solid border-2 border-blood hover:bg-red-600 focus:ring-4 focus:ring-red-200 font-medium rounded-md text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-blood dark:focus:ring-red-800">Register</button>
                </li>
            </ul>
        )
    }
}

export default function Navbar(props) {
    return (
        <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-600 my-5">
            <div className="flex flex-wrap justify-between items-center">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <Leftnav isLogin={props.isLogin} />
            </div>
        </nav>
    )
}