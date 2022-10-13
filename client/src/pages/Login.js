import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { Button } from "semantic-ui-react";


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <wrapper>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <divider />
          <p>
            Don't have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <divider />
          <p>
            Already have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p>
        </>
      )}
    </wrapper>
  );
}


export default Login;