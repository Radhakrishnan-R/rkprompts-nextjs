"use client";

import Image from "next/image";
import Link from "next/link";
import {signOut, signIn, useSession, getProviders} from "next-auth/react";


const Nav = () => {

  const isAuthenticated = true;

  return (
    <header className="w-full mb-10 py-5 ">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-2xl flex gap-2 items-center font-medium">
        <Image 
              src="/assets/images/logo.svg"
              alt="logo-image"
              width={30}
              height={30}
            />
          RKPrompts.
        </Link>
        <div className="flex">
        {isAuthenticated ? (
          <div className="flex gap-3">
            <Link href="/create-post" className="black_btn">
            
            Create Post</Link>
            <button className="outline_btn" onClick={signOut}>Sign Out</button>
            <Link href="/profile">
              <Image 
                src="/assets/images/logo.svg" 
                alt="Profile-image"
                width={29}
                height={29}
                className="rounded-full"
              />
            </Link>
          </div>
          
        ) : (
          <button className="black_btn" onClick={signIn}>Sign In</button>
        )}
          
        </div>
      </nav>
    </header>
  )
}

export default Nav;