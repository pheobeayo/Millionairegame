import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className='relative'>
       <header className='w-full bg-[#008080]'>
       <Header/>
       </header>
      <div>
        <main className="">{children}</main>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Layout;