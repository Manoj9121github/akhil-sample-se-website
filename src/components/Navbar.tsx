"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between p-4 shadow-md bg-white">
      <h1 className="text-xl font-bold">Soujanya Enterprises</h1>
      <ul className="flex gap-6">
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
