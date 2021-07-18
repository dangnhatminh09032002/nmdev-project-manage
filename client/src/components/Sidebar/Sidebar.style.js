import styled from "styled-components";

const SidebarWrapper = styled.div`
  display: flex;
  position: fixed;
  flex-direction: ${(props) => props.direction};
  width: ${(props) => {
    if (props.collapsed === "block") {
      return "240px";
    }
    return "min-content";
  }};
  height: ${(props) => {
    return "100vh";
  }};
  background: #333269;
`;

export default SidebarWrapper;
