import React from 'react';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import {options} from '../api/auth/[...nextauth]/options'



const Nav = async () =>  {
    const session = await getServerSession(options); 
    return (
        <header className="bg-gray-800 shadow-md">
            <nav className="flex justify-between items-center w-full px-10 py-4 max-w-screen-xl mx-auto">

                {/* Logo Section */}
                <div className="text-white font-bold text-2xl tracking-wide">
                    <Link href="/">MyApp</Link>
                </div>

                {/* Navigation Links */}
                <div className="flex gap-8">
                    <Link href="/" className="text-gray-300 hover:text-white transition duration-200">
                        Home
                    </Link>
                    <Link href="/CreateUser" className="text-gray-300 hover:text-white transition duration-200">
                        Create User
                    </Link>
                    <Link href="/ClientMember" className="text-gray-300 hover:text-white transition duration-200">
                        Client Member
                    </Link>
                    <Link href="/Member" className="text-gray-300 hover:text-white transition duration-200">
                        Member
                    </Link>
                    <Link href="/Public" className="text-gray-300 hover:text-white transition duration-200">
                        Public
                    </Link>
                </div>

                {/* Profile Button */}
                <div>
                    <Link href="/profile">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition duration-200">
                            Profile
                        </button>
                    </Link>

                    {session ? (
                        <Link href="/api/auth/signout?callbackUrl=/" passHref>
                            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 transition duration-200 m-4">
                                Logout
                            </button>
                        </Link>
                    ) : (
                        <Link href="/api/auth/signin" passHref>
                            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition duration- m-4">
                                Login
                            </button>
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Nav;
