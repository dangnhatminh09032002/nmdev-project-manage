import { createGlobalStyle } from "styled-components";

import robotoThink from "../fonts/Roboto/Roboto-Thin.ttf";
import robotoLight from "../fonts/Roboto/Roboto-Light.ttf";
import robotoRegular from "../fonts/Roboto/Roboto-Regular.ttf";
import sfProDisplayRegular from "../fonts/SfProDisplay/FontsFree-Net-SFProDisplay-Regular.ttf";
import sfProDisplayBold from "../fonts/SfProDisplay/FontsFree-Net-SFProDisplay-Bold.ttf";
import sfProDisplayThin from "../fonts/SfProDisplay/FontsFree-Net-SFProDisplay-Thin.ttf";

export default createGlobalStyle`

    @font-face {
        font-family: 'sfProDisplayThin';
        src: url(${sfProDisplayThin}) format('truetype');
        font-weight: normal;
        font-style: normal;
    };

    @font-face {
        font-family: 'sfProDisplayRegular';
        src: url(${sfProDisplayRegular}) format('truetype');
        font-weight: normal;
        font-style: normal;
    };
    
    @font-face {
        font-family: 'sfProDisplayBold';
        src: url(${sfProDisplayBold}) format('truetype');
        font-weight: normal;
        font-style: normal;
    };

    @font-face {
        font-family: 'robotoThink';
        src: url(${robotoThink}) format('truetype');
        font-weight: normal;
        font-style: normal;
    };
    
    @font-face {
        font-family: 'robotoLight';
        src: url(${robotoLight}) format('truetype');
        font-weight: normal;
        font-style: normal;
    };

    @font-face {
        font-family: 'robotoRegular';
        src: url(${robotoRegular}) format('truetype');
        font-weight: normal;
        font-style: normal;
    };

    *,
    ::after,
    ::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 1;
    }
`;
