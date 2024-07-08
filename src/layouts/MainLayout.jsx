import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";

function MainLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="relative">
        <Outlet />
      </main>
      <footer>
        <Footer lassName="relative"/>
      </footer>
    </div>
  );
}

export default MainLayout;
