import React, {useEffect, useState} from "react";
import "./App.css";
import SignIn from './components/SignInModal';
import SignUp from './components/SignUpModal';

function App() {
  const [signIn, setSignIn] = useState<boolean>(false);
  const [signUp, setSignUp] = useState<boolean>(false);
  const mainStyle: React.CSSProperties = {
    display: "flex",
    gap: "2rem",
  }
  useEffect(() => {
    const isModalOpen: boolean = signIn || signUp;
    if (isModalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    }
  }, [signIn, signUp])

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
      {signUp && <SignUp setSignUp={setSignUp} />}
    </main>
  );
}

export default App;
