import styled from "styled-components";

import bitmapImg from "../../images/Bitmap.jpg";

const FormSignUpWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #f2f2f2;

  .container {
    display: flex;
    width: min-content;
    border-radius: 5px;
    background: #ffffff;
    overflow: hidden;
    .right {
      display: block;
      width: 470px;
      height: 640px;
      background: url(${bitmapImg}) no-repeat center center;

      .introduction {
        width: 100%;
        height: 100%;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.0001) 53.09%,
          rgba(0, 0, 0, 0.37276) 100%
        );
      }
    }

    .left {
      width: 470px;
      height: 640px;
      padding: 55px 64px;

      .signUpTop {
        width: 100%;
        margin-bottom: 24px;
        ul {
          display: flex;
          justify-content: space-between;
          width: 100%;
          list-style: none;
          font-family: "RobotoBold";
          color: #9ea0a5;

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

      .signUpForm {
        .form {
          .signUpSubmit {
            width: 100%;
            height: 40px;
            background: #1665d8;
          }
        }
      }
    }
  }
`;

export default FormSignUpWrapper;
