import { createGlobalStyle } from "styled-components";

import robotoBold from "../fonts/Roboto/Roboto-Bold.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'RobotoBold';
        src: local('RobotoBold'), local('RobotoBold'),
        url(${robotoBold}) format('ttf'),
        url(${robotoBold}) format('woff');
        font-weight: 400;
        font-style: normal;
    };   
`;
