import { connect } from "react-redux";
import SignInStyleWrapper from "./signInStyle";
import FormSignUp from "../../components/FormSignUp/FormSignUp";

const SignUp = () => {
  return (
    <SignInStyleWrapper>
      <FormSignUp></FormSignUp>
    </SignInStyleWrapper>
  );
};

export default connect(null, null)(SignUp);
