import React, { useState } from "react";
import { NavLink as NavLinkReactRouterDOM } from "react-router-dom";
import NavLinkWrapper from "./NavLink.style";

export default function NavLink({
  collapsed = "block",
  component: Icon,
  title,
  colorCurrent = "#fff",
  colorNotMatch = "#C0BEFF",
  colorMatch = "#fff",
  baseURL = "",
  href = "/",
  direction = "row",
  ...props
}) {
  const [isMatch, setMatch] = useState(false);
  return (
    <NavLinkWrapper
      collapsed={collapsed}
      direction={direction}
      isMatch={isMatch}
      color={isMatch ? colorMatch : colorNotMatch}
      colorCurrent={colorCurrent}
    >
      <div className="currentLink"></div>
      <div>
        <NavLinkReactRouterDOM
          to={baseURL + href}
          isActive={(match, location) => {
            if (match) {
              setMatch(true);
            } else {
              setMatch(false);
            }
          }}
        >
          <div className="navLink">
            <Icon color={isMatch ? colorMatch : colorNotMatch} />
            <span>{title}</span>
          </div>
        </NavLinkReactRouterDOM>
      </div>
    </NavLinkWrapper>
  );
}
