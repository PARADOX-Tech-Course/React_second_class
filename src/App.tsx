import React, { useState } from "react";
import "./App.css";
import SignIn from './components/SignInModal';

function App() {
  const [signIn, setSignIn] = useState<boolean>(false);
  const [signUp, setSignUp] = useState<boolean>(false);
  const mainStyle: React.CSSProperties = {
    display: "flex",
    gap: "2rem",
  }
  const openSignInModal = () => {
    setSignIn(true);
    setSignUp(false);
  }
  const openSignUpModal = () => {
    setSignUp(true);
    setSignIn(false);
  }
  return (
    <main style={mainStyle}>
      <button onClick={openSignInModal}>Sign in</button>
      <button onClick={openSignUpModal}>Sign up</button>
      {signIn && <SignIn setSignIn={setSignIn} />}
      {signUp && <SignUp />}
    </main>
  );
}

export default App;
