import styled from "styled-components";

import bitmapImg from "../../images/Bitmap.jpg";

const FormSignInWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #f2f2f2;
  @media screen and (max-height: 640px) {
    width: auto;
    height: auto;
  }

  .container {
    display: flex;
    width: min-content;
    border-radius: 5px;
    background: #ffffff;
    overflow: hidden;

    .left {
      width: 470px;
      height: 640px;
      padding: 55px 64px;
      overflow: hidden;
      @media screen and (max-width: 370px) {
        padding: 50px 10px;
      }
      .signInTop {
        width: 100%;
        margin-bottom: 24px;

        ul {
          display: flex;
          justify-content: space-between;
          width: 100%;
          list-style: none;
          font-family: "robotoLight", sans-serif;
          color: #9ea0a5;
          line-height: 16px;

          li {
            display: flex;
            align-items: center;
            font-size: 14px;

            span {
              margin-left: 8px;
            }
          }
        }
      }

      .signInHeader {
        margin-bottom: 40px;
        font-family: robotoRegular, sans-serif;
        line-height: 28px;
        h2 {
          display: block;
          margin-bottom: 4px;
        }
        p {
          font-size: 14px;
          color: #9ea0a5;
          letter-spacing: -0.05px;
        }
      }

      .signInForm {
        .form {
          .signInSubmit {
            width: 100%;
            height: 40px;
            background: #1665d8;
          }
        }
        .login {
          margin-top: 25px;
          padding-top: 25px;
          border-top: 1px dashed rgb(216, 216, 216);
          .loginWith {
            width: 100%;
            height: 40px;
            margin: 5px 0;
          }
          .loginWithGoogle {
            background-color: rgb(221, 75, 57);
          }
          .loginWithFacebook {
            width: 100%;
            height: 40px;
            background-color: rgb(59, 89, 152);
          }
        }
      }
    }

    .right {
      width: 470px;
      height: 640px;
      background: url(${bitmapImg}) no-repeat center center;

      .introduction {
        width: 100%;
        height: 100%;
        padding: 24px 18px;
        position: relative;
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.0001) 53.09%,
          rgba(0, 0, 0, 0.37276) 100%
        );
        color: #ffffff;
        font-family: robotoLight;

        div {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          margin: 16px 0;
          width: 100%;
          font-size: 14px;
          img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }
          ul {
            margin-left: 12px;
            display: flex;
            flex-direction: column;
            list-style: none;
            li:nth-child(2) {
              font-size: 12px;
            }
          }
        }
      }
      @media only screen and (max-width: 940px) {
        display: none;
      }
    }
  }
`;

export default FormSignInWrapper;
