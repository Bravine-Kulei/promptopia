"use client"
import { SessionProvider } from "next-auth/react"


const provider = ({children, Session}) => {
  return (
    <SessionProvider session={Session}>
      {children}
    </SessionProvider>
  )
}

export default provider