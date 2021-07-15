import React, { Component } from "react";
import FormSignUpWrapper from "./FormSignUpStyle";
import { Link } from "react-router-dom";
import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";

import arrowRightIcon from "../../images/icon/arrow-right.svg";

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
                    <Link>
                      <img src={arrowRightIcon}></img>
                    </Link>
                    <span>Go back</span>
                  </li>
                  <li>
                    <span>
                      Have an account? <Link>Sign In</Link>
                    </span>
                  </li>
                </ul>
              </div>
            </Grid>
            <div className="signUpHeader"></div>
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
            <div className="introduction"></div>
          </div>
        </div>
      </FormSignUpWrapper>
    );
  }
}
