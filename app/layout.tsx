import "@styles/globals.css"
import { describe } from "node:test"


export const  metadata = {
    tittle:"propmtopia",
    description:"Create and share AI prompts"
}



const RootLayout = ({ children }) => {
  return (
   <html lang="en">
    <body>
        <div className="main">
            <div className="gradient">                
            </div>
            
        </div>

        <main className="app">
            {children}
        </main>
    </body>

   </html>
  )
}

export default RootLayout