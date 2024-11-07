import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../provider/Authprovider";

const Header = () => {
    const { currentuser, loginOut } = useContext(Authcontext)
    const navlink = (
        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/Explore'}>Explore Spots</NavLink></li>
            <li><NavLink to={'/sports'}>Share to sports</NavLink></li>
            <li><NavLink to={'/ Post'}>My Post</NavLink></li>
        </>
    )
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navlink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlink}
                    </ul>
                </div>

                <div className="navbar-end">

                    <div>
                        {currentuser ? (
                            <>

                                <div className="dropdown dropdown-end">
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="btn btn-ghost btn-circle avatar"
                                    >
                                        <div className="w-10 rounded-full">
                                            <img src={currentuser?.photoURL} />
                                        </div>
                                    </div>
                                    <ul className="mt-3 z-10 p-3 shadow-lg menu menu-sm dropdown-content bg-white rounded-lg w-56">
                                        <li><Link to="/my-profile" className="text-gray-700 hover:bg-gray-100">View Profile</Link></li>
                                        <li><Link to="/update-profile" className="text-gray-700 hover:bg-gray-100">Edit Account</Link></li>
                                        <li><button onClick={loginOut} className="text-red-600 hover:bg-gray-100">Log Out</button></li>
                                    </ul>
                                </div>

                            </>
                        ) : ("")}
                    </div>
                    {/* </label> */}
                    {currentuser ? (
                        <button
                            onClick={loginOut}
                            className="btn btn-outline border-none btn-error lg:text-xl capitalize lg:ms-2 text-white hover:bg-basicColor"
                        >
                            Log out
                        </button>
                    ) : (
                        <>
                            <Link to="/login" className="btn bg-white text-teal-600 px-6 py-2 rounded-full hover:bg-gray-100">
                                Log In
                            </Link>
                            <Link
                                to={"/register"}
                                className="btn btn-outline bg-white text-teal-600 px-6 py-2 rounded-full hover:bg-gray-100 btn-accent border-none lg:text-lg capitalize  hover:bg-basicColor"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>


                
            </div>
        </div>
    );
};

export default Header;