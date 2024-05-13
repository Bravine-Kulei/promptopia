"use client "

import Link from "next/link" //clicking links on the nav
import Image from "next/image"  //use images
import Router from "next/router" //redirecting
import { useState, useEffect } from "react" //state management
import { signIn,signOut,useSession,getProviders } from "next-auth/react" //auth



const Nav = () => {
  return (
    <nav className="w-full flex-between mb-16">
        

    </nav>
  )
}

export default Nav