import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import { useState } from "react";

const Layout = () => {  
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
        <Header isOpen={isOpen} handleToggle={() => setIsOpen(false)} />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default Layout