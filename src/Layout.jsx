import React from "react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Nav from "./components/MainNav";
import BackToTop from "./components/BackToTop";
import TechNav from "./components/TechNav";
import Footer from "./components/Footer";

const Layout = () => {
  if (localStorage.getItem("overlap") == null)
    localStorage.setItem("overlap", false);
  const [overlap, setOverlap] = useState(
    JSON.parse(localStorage.getItem("overlap"))
  );

  if (localStorage.getItem("banner") == null)
    localStorage.setItem("banner", true);
  const [bannerState, setBannerState] = useState(
    JSON.parse(localStorage.getItem("banner"))
  );

  if (localStorage.getItem("header") == null)
    localStorage.setItem("header", true);
  const [headerSticky, setHeaderSticky] = useState(
    JSON.parse(localStorage.getItem("header"))
  );
  return (
    <>
      <div className="bkg-texture fixed top-0 left-0 w-screen h-screen flex justify-center -z-20"></div>
      <main className=" relative bg-bkg-light dark:bg-bkg min-h-screen  flex flex-col max-w-7xl mx-auto border-text-light dark:border-opacity-50 dark:border-accent max-[1150px]:border-none border-x-2 border-opacity-30 font-medium dark:font-normal pb-[34px]">
        <div className="dark:bg-accent bg-text-dark  w-full  mx-auto h-full top-0 left-0 absolute blur-[80px] opacity-50 self-center -z-10"></div>
        <Header
          bannerState={bannerState}
          setBannerState={setBannerState}
          overlap={overlap}
          setOverlap={setOverlap}
          headerSticky={headerSticky}
          setHeaderSticky={setHeaderSticky}
        />
        <Banner bannerState={bannerState} setBannerState={setBannerState} />
        <Nav
          overlap={overlap}
          setOverlap={setOverlap}
          headerSticky={headerSticky}
        />
        <TechNav />
        <BackToTop />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default Layout;
