"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const path = usePathname();
  return (
    <>
      {navLinks.map((link) => {
        const isActive = path === link.href;

        return (
          <Link
            href={link.href}
            key={link.label}
            className={isActive ? "active" : ""}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
};

export default Navigation;
