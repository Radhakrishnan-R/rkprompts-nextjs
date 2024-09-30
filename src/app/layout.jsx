import "./globals.css";
import Nav from "@components/Nav";

export const metadata = {
  title: "RKPrompts",
  Description: "Dicover the best AI prompts",
}

const RootLayout = ({children}) => {
  return (
    <html>
      <body>
      <div className='main'>
        <div className='gradient'></div>
      </div>
        <main className='app'>
        <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout;