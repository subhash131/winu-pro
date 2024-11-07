import Link from "next/link";
import React from "react";

const Shortcut = ({
  name,
  children,
  link,
}: {
  name: string;
  children: React.ReactNode;
  link: string;
}) => {
  return (
    <Link
      href={link}
      className="rounded-full bg-foreground text-white flex items-center justify-center size-12 border border-active active:scale-95 transition-transform group"
    >
      <div className="absolute px-2 py-0.5 text-xs left-0 group-hover:left-14 transition-all bg-active rounded-full opacity-0 group-hover:opacity-100">
        <p className="text-nowrap">{name}</p>
      </div>
      {children}
    </Link>
  );
};

export default Shortcut;
