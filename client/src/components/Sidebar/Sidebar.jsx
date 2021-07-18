import React from "react";
import SidebarWrapper from "./Sidebar.style";
import NavLinkList from "../Link/NavLinkList";

export default function Sidebar({ direction = "column", collapsed }) {
  return (
    <SidebarWrapper direction={direction} collapsed={collapsed}>
      <NavLinkList collapsed={collapsed} />
    </SidebarWrapper>
  );
}
