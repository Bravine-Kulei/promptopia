import "@styles/globals.css";
import { describe } from "node:test";

import Nav from "@components/Nav";
import provider from "@components/Provider";

export const metadata = {
  tittle: "propmtopia",
  description: "Create and share AI prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <provider>
          <div className="main">
            <div className="gradient"></div>
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </provider>
      </body>
    </html>
  );
};

export default RootLayout;
