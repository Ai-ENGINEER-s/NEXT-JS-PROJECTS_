import React from 'react';
import Link from 'next/link';
import { link } from '../utils/NavPageLinks';

const Navbar = () => {
  return (
    <div className="flex gap-8 bg-gray-800 py-4 px-8 shadow-md">
      <h1 className="text-white text-xl font-semibold">My Site</h1>

      <Link href={link.Home} className="text-gray-300 hover:text-white font-medium transition duration-200">
        Home
      </Link>
      <Link href={link.CreateUser} className="text-gray-300 hover:text-white font-medium transition duration-200">
        Create User
      </Link>
      <Link href={link.ClientMember} className="text-gray-300 hover:text-white font-medium transition duration-200">
        Client Member
      </Link>
      <Link href={link.Member} className="text-gray-300 hover:text-white font-medium transition duration-200">
        Member
      </Link>
      <Link href={link.Public} className="text-gray-300 hover:text-white font-medium transition duration-200">
        Public
      </Link>
    </div>
  );
};

export default Navbar;