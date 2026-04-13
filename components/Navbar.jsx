"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = ["Product", "Pricing", "Learn", "Blog"];

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 py-6 bg-[#0f0f1e] text-white relative">
      <img src="/imageJ/logo.svg" className="h-7"/>


      <ul className="hidden md:flex gap-8 text-gray-300">
        {navLinks.map((link, i) => (
          <li key={i} className="hover:text-white cursor-pointer">
            {link}
          </li>
        ))}
      </ul>
      <div className="hidden md:flex items-center gap-5">
        <spn className="text-gray-300">Account</spn>
        <button className="bg-purple-600 px-5 py-2 rounded-lg">
          Get Started
        </button>
      </div>
      <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
         <FaBars />
      </button>
      {open && (
        <div className="absolute top-20 lef-0 w-full bg-[#0f0f1e] flec flex-col items-center gap-6 py-6 md:hidden">
          {
            navLinks.map((link, i) => (
              <p key={i}>{link}</p>
            ))
          }

          <span>Account</span>

          <button className="bg-purple-600 px-6 py-2 rounded">Get Started</button>
        </div>
      )}
    </nav>
  )
}