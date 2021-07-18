import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import validator from "validator";
import { throttle } from "throttle-debounce";

import FormSignInWrapper from "./FormSignInStyle";
import arrowRightIcon from "../../images/icon/arrow-right.svg";
import imageOval from "../../images/Oval.jpg";

const throttleHandleChange = throttle(1000, false, (cb) => {
  cb();
});

export default class FormSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailError: false,
      email: "",
      password: "",
    };
    this.handleSubmitWithGoogle = this.handleSubmitWithGoogle.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmitWithGoogle() {
    window.open("/auth/google", "_blank");
    // this.props.loginRequest();
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleEmailChange(e) {
    let email = e.target.value;
    throttleHandleChange(() => {
      let isEmail = validator.isEmail(email);
      if (isEmail) {
        this.setState({ isEmailError: false, email });
      } else {
        this.setState({ isEmailError: true });
      }
    });
  }

  handlePasswordChange(e) {
    let password = e.target.value;
    throttleHandleChange(() => {
      this.setState({ password });
    });
  }

  render() {
    return (
      <FormSignInWrapper>
        <div className="container">
          <div className="left">
            <Grid item xs={12}>
              <div className="signInTop">
                <ul>
                  <li>
                    <Link to="/signup">
                      <img src={arrowRightIcon}></img>
                    </Link>
                    <span>Sign Up</span>
                  </li>
                </ul>
              </div>
            </Grid>
            <div className="signInHeader">
              <h2>Welcome to NMDev</h2>
              <p>Hii</p>
            </div>
            <div className="signInForm">
              <form className="form">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      error={this.state.isEmailError}
                      onChange={this.handleEmailChange}
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      onChange={this.handlePasswordChange}
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="Remember me"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      onClick={this.handleSubmit}
                      className="signInSubmit"
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      Sign In
                    </Button>
                  </Grid>
                </Grid>
              </form>
              <Grid item xs={12} className="login">
                <Grid item xs={12}>
                  <Button
                    onClick={this.handleSubmitWithGoogle}
                    className="loginWith loginWithGoogle"
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Login with Google
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    className="loginWith loginWithFacebook"
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Login with Facebook
                  </Button>
                </Grid>{" "}
              </Grid>
            </div>
          </div>
          <div className="right">
            <div className="introduction">
              <div>
                <img src={imageOval}></img>
                <ul>
                  <li>Takamaru Ayako</li>
                  <li>Manager an inVision</li>
                </ul>
              </div>
              <p>
                Hella narwhal Cosby sweater McSweeney's, salvia kitsch before
                they sold out High Life.
              </p>
            </div>
          </div>
        </div>
      </FormSignInWrapper>
    );
  }
}
