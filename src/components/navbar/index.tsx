import React from "react";
import { FaGamepad, FaUserAstronaut } from "react-icons/fa";
import { HiMiniHome } from "react-icons/hi2";
import NavItem from "./nav-item";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const items = [
  {
    name: "Home",
    icon: HiMiniHome,
    link: "/home",
    iconSize: 20,
  },
  {
    name: "Tournaments",
    icon: FaGamepad,
    link: "/tournaments",
    iconSize: 20,
  },
  {
    name: "Profile",
    icon: FaUserAstronaut,
    link: "/profile",
    iconSize: 18,
  },
];

const Navbar = () => {
  return (
    <div className="fixed bottom-10 h-16 pointer-events-none flex w-full items-center justify-center">
      <nav className="px-4 py-1.5 rounded-full bg-active flex items-center justify-center pointer-events-auto gap-1">
        {items.map(({ icon: Icon, link, name, iconSize }, idx) => {
          return (
            <NavItem
              idx={idx}
              link={link}
              name={name}
              key={`nav-${idx}-${name}`}
            >
              <Icon size={iconSize} />
            </NavItem>
          );
        })}
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </div>
  );
};

export default Navbar;
