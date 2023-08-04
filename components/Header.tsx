import Link from "next/link";
import React from "react";
import Navigation from "./Navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const Header = () => {
  return (
    <header className="container">
      <Navigation navLinks={navItems}></Navigation>
    </header>
  );
};

export default Header;
