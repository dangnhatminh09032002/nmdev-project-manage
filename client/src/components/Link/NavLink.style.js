import styled from "styled-components";

const view = {
  desktopView: { width: "5px", height: "35px" },
  mobileView: { width: "50px", height: "5px" },
};

const NavLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: ${(props) => {
    return props.direction;
  }};
  margin: 13px 0;
  font-size: 18px;
  font-family: ${(props) =>
    props.isMatch ? "sfProDisplayBold" : "sfProDisplayThin"};

  div.currentLink {
    width: ${(props) => {
      if (props.direction === "row") {
        return view.desktopView.width;
      } else {
        return view.mobileView.width;
      }
    }};
    height: ${(props) => {
      if (props.direction === "row") {
        return view.desktopView.height;
      } else {
        return view.mobileView.height;
      }
    }};
    background: ${(props) => {
      return props.isMatch ? props.colorCurrent : "transparent";
    }};
    border-radius: 5px;
  }

  a {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin: 0 46px;
    div.navLink {
      display: flex;
      flex-direction: ${(props) => {
        return props.direction;
      }};
      justify-content: center;
      align-items: center;
      height: max-content;
      line-height: 20px;
      color: ${(props) => props.color};
      span {
        display: ${(props) => props.collapsed};
        margin-left: 20px;
      }
    }
  }
`;

export default NavLinkWrapper;
