import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { gsap } from "gsap";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (visible) {
      gsap.to(".navbar", { y: 0, duration: 0.3, ease: "power2.out" });
    } else {
      gsap.to(".navbar", { y: -100, duration: 0.3, ease: "power2.out" });
    }
  }, [visible]);

  return (
    <nav
      className={`bg-black z-50 py-6 px-4 flex items-center justify-between navbar fixed w-full transition-transform duration-300 ${
        visible ? "top-0" : "-top-20"
      }`}
    >
      <div className="text-white text-lg font-semibold">Logo</div>
      <RxHamburgerMenu className="text-white text-2xl cursor-pointer" />
    </nav>
  );
}
