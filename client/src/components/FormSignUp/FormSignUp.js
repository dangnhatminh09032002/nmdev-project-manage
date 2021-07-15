import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";

import FormSignUpWrapper from "./FormSignUpStyle";
import arrowRightIcon from "../../images/icon/arrow-right.svg";
import imageOval from "../../images/Oval.jpg";

export default class FormSignUp extends Component {
  render() {
    return (
      <FormSignUpWrapper>
        <div className="container">
          <div className="left">
            <Grid item xs={12}>
              <div className="signUpTop">
                <ul>
                  <li>
                    <Link to="/signin">
                      <img src={arrowRightIcon}></img>
                    </Link>
                    <span>Go back</span>
                  </li>
                  <li>
                    <span>
                      Have an account? <Link to="/signin">Sign In</Link>
                    </span>
                  </li>
                </ul>
              </div>
            </Grid>
            <div className="signUpHeader">
              <h2>Sign up to NMDev</h2>
              <p>Sign up on the internal platform</p>
            </div>
            <div className="signUpForm">
              <form className="form">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="lname"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
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
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I have read the Terms and Conditions."
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      className="signUpSubmit"
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      SIGN UP NOW
                    </Button>
                  </Grid>
                </Grid>
              </form>
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
      </FormSignUpWrapper>
    );
  }
}
