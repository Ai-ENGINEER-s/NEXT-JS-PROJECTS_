"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import ImageButton from './ImageButton';
import profileDefault from '@/public/assets/images/profile.png';

const Nav = () => {
  const link = "/";
  const imagURL = "/assets/images/logo.svg";

  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  const handleClickProfile = () => {
    setToggleDropDown((prev) => !prev);
  };

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    fetchProviders();
  }, []);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href={link} className="flex items-center space-x-2">
        <Image
          src={imagURL}
          alt='promptshare app logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text text-lg font-semibold'>PromptShare</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className='flex gap-4 items-center'>
            <Link href={"/create-prompt"} className='black_btn'>
              Create Post
            </Link>
            <button
              type='button'
              onClick={signOut}
              className='outline_btn cursor-pointer'
            >
              Sign Out
            </button>

            <Link href={"/profile"}>
              <Image
                src={session?.user.image || profileDefault}
                className='rounded-full border border-gray-300 shadow-sm'
                alt='profile'
                width={37}
                height={37}
                onClick={() => {}}
              />
            </Link>
          </div>
        ) : (
          providers && Object.values(providers).map((provider) => (
            <button
              type='button'
              key={provider.name}
              onClick={() => signIn(provider.id)}
              className='black_btn'
            >
              Sign in with {provider.name}
            </button>
          ))
        )}
      </div>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className="flex items-center">
            <ImageButton
              src={session?.user.image || profileDefault}
              alt='profile utilisateur'
              onClick={handleClickProfile}
              width={37}
              height={37}
            />
            {toggleDropDown && (
              <div className="dropdown cursor-pointer bg-white shadow-lg rounded-lg p-3 absolute top-12 right-0 w-40">
                <Link
                  href="/profile"
                  className='dropdown_link block text-sm text-gray-700 py-2 hover:bg-gray-100 rounded-md'
                  onClick={() => setToggleDropDown(false)}
                >
                  My Profile
                </Link>

                <Link
                  href={"/create-prompt"}
                  className='dropdown_link block text-sm text-gray-700 py-2 hover:bg-gray-100 rounded-md'
                  onClick={() => setToggleDropDown(false)}
                >
                  Create Prompt
                </Link>

                <button
                  type='button'
                  onClick={() => {
                    setToggleDropDown(false);
                    signOut();
                  }}
                  className='black_btn w-full mt-2 text-center'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          providers && Object.values(providers).map((provider) => (
            <button
              type='button'
              key={provider.name}
              onClick={() => signIn(provider.id)}
              className='black_btn px-4 py-2 font-semibold text-sm rounded-lg'
            >
              Sign in with {provider.name}
            </button>
          ))
        )}
      </div>
    </nav>
  );
}

export default Nav;
