import { connect } from "react-redux";
import SignInStyleWrapper from "./signInStyle";
import FormSignIn from "../../components/FormSignIn/FormSignIn";
import authAction from "../../redux/auth/actions";

function SignIn({ isLoggedIn, token, loginRequest }) {
  return (
    <SignInStyleWrapper>
      <FormSignIn
        isLoggedIn={isLoggedIn}
        token={token}
        loginRequest={loginRequest}
      ></FormSignIn>
    </SignInStyleWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: () => {
      dispatch(authAction.loginRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
