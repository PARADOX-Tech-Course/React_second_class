import React, { useState } from "react";
import "./App.css";

function App() {
  const [signIn, setSignIn] = useState<boolean>(false);
  const [signUp, setSignUp] = useState<boolean>(false);
  const mainStyle = {
    display: "flex",
    gap: "2rem",
  }
  return (
    <main style={mainStyle}>
      <button>Sign in</button>
      <button>Sign up</button>
      {signIn && <SignIn />}
      {signUp && <SignUp />}
    </main>
  );
}

export default App;
