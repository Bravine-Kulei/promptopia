"use client";

import Link from "next/link"; //clicking links on the nav
import Image from "next/image"; //use images
import Router from "next/router"; //redirecting
import { useState, useEffect, use } from "react"; //state management
import { signIn, signOut, useSession, getProviders } from "next-auth/react"; //auth

const Nav = () => {
  const isUserLoggedIn = true;

  const [toogleDropDown, settoogleDropDown] = useState(false);

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    fetchProviders();
  }, []);

  return (
    <nav className="w-full flex-between mb-16 pt-3">
      <Link href="/" classname="flex gap-3 flex-center ">
        <Image
          src="/assets/images/logo.svg"
          alt="promptopia log"
          width={40}
          height={40}
          className="cursor-pointer object-contain"
        />
        <p className="logo_text">promptopia</p>
      </Link>

      {/*desktop devices */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              create post
            </Link>

            <button
              type="button"
              //onClick={signOut}
              className="outline_btn"
            >
              signOut
            </button>

            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                alt="profile picture"
                width={40}
                height={40}
              />
            </Link>
          </div>
        ) : (
          <>
            {/*using providers to try ans sign in with google-auth*/}
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/**mobile devices */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              alt="profile picture"
              width={40}
              height={50}
              className="rounded-full cursor-pointer"
              onClick={() => {
                settoogleDropDown((prev) => !prev);
              }}
            />

            {toogleDropDown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => settoogleDropDown(false)}
                >
                  Profile
                </Link>

                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => settoogleDropDown(false)}
                >
                  create prompt
                </Link>

                <button
                  type="button"
                  className="mt-5 w-full black_btn"
                  onClick={() => {
                    settoogleDropDown(false);
                    signOut();
                  }}
                >
                  sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {/*using providers to try ans sign in with google-auth*/}
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
