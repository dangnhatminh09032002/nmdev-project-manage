import React from "react";
import NavLink from "./NavLink";
import linkList from "../../data/linkList";

export default function NavLinkList({ collapsed }) {
  return (
    <>
      {linkList.map((link) => (
        <NavLink
          collapsed={collapsed}
          colorCurrent="#EE3637"
          key={link.title}
          href={link.href}
          title={link.title}
          component={link.component}
        />
      ))}
    </>
  );
}
