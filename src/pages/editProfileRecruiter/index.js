import React from "react";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";

export const EditProfileRecruiter = () => {
  return (
    <>
      <nav className="navbar-mobile w-full h-[10vh] md:hidden flex px-3 items-center justify-center fixed top-0 left-0 bg-white z-20 shadow-2xl">
        <p className="text-purple text-xl cursor-pointer font-bold">HelloJob</p>
      </nav>
      <Navbar />
      <main className="h-screen w-full bg-red-500 pt-40">
        EDIT PROFILE RECRUITER
      </main>
      <Footer />
    </>
  );
};
