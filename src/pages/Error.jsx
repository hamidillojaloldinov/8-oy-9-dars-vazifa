import React from "react";
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 justify-center text-[158px] text-center font-extrabold text-primary-600 dark:text-primary-500 flex items-center">
                  4<img className="w-60" src="/plov.png" alt="" />4
                </h1>
                <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl ">
                  Something's missing.
                </p>
                <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                  Sorry, we can't find that page. You'll find lots to explore on
                  the home page.
                </p>
                <Link
                  to="/"
                  className="inline-flex bg-primary-600 btn font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
                >
                  Back to Home page
                </Link>
              </div>
            </div>
      </main>
      <Footer />
    </>
  );
}

export default Error;
