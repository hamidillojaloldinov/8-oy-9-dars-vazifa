import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

function MainLayout() {
  return (
    <>
      {}
      <header>
        <Navbar />
      </header>
      <main className="relative mb-20">
        <Outlet />
      </main>
      <footer>
        <Footer lassName="relative"/>
      </footer>
    </>
  );
}

export default MainLayout;
