import React, { useState, useEffect } from "react";
import "./AuthModal.css";
import {
  signup,
  login,
  googleLogin,
  facebookLogin,
  resetPassword,
  resendVerification,
} from "../../firebase";
import { auth } from "../../firebase";

const AuthModal = ({ type, setType, closeModal }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [unverifiedUser, setUnverifiedUser] = useState(null);

  // Listen to auth state changes to auto-update navbar
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) closeModal(); // close modal automatically when logged in
    });
    return () => unsubscribe();
  }, [closeModal]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || (type === "signup" && (!firstName || !lastName))) {
      return alert("Please fill all required fields");
    }

    if (type === "signup") {
      const user = await signup(firstName, lastName, email, password);
      if (user) closeModal();
    } else {
      const res = await login(email, password);
      if (res?.unverified) {
        setUnverifiedUser(res.user);
      } else if (res) {
        closeModal();
      }
    }
  };

  const handleGoogle = async () => {
    const user = await googleLogin();
    if (user) closeModal();
  };

  const handleFacebook = async () => {
    const user = await facebookLogin();
    if (user) closeModal();
  };

  const handleReset = async () => {
    if (!email) return alert("Enter your email to reset password");
    await resetPassword(email);
  };

  const handleResend = async () => {
    if (unverifiedUser) await resendVerification(unverifiedUser);
  };

  return (
    <div className="auth-overlay">
      <div className="auth-modal">
        <span className="close-btn" onClick={closeModal}>×</span>
        <h2>{type === "signup" ? "Create Account" : "Login"}</h2>

        {unverifiedUser ? (
          <div className="verification-msg">
            Please verify your email. Didn't receive it?
            <span onClick={handleResend}> Resend Email</span>
          </div>
        ) : (
          <>
            {type === "signup" && (
              <div className="name-fields">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {type === "login" && (
              <p className="forgot-pw" onClick={handleReset}>
                Forgot Password?
              </p>
            )}

            <button className="primary-btn" onClick={handleSubmit}>
              {type === "signup" ? "Sign Up" : "Login"}
            </button>

            <div className="divider">OR</div>

            <div className="social-btns">
              <button className="google-btn" onClick={handleGoogle}>
                Continue with Google
              </button>
              <button className="facebook-btn" onClick={handleFacebook}>
                Continue with Facebook
              </button>
            </div>
          </>
        )}

        <p className="switch-auth">
          {type === "signup" ? "Already have an account?" : "Don't have an account?"}
          <span
            onClick={() => {
              setType(type === "signup" ? "login" : "signup");
              setUnverifiedUser(null);
            }}
          >
            {type === "signup" ? " Login" : " Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
