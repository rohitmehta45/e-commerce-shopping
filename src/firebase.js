import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getFirestore, collection, addDoc, query, where, getDocs, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

// ------------------- AUTH FUNCTIONS -------------------

export const signup = async (firstName, lastName, email, password, role = "user") => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await sendEmailVerification(user);

    const usersRef = collection(db, "users");
    await addDoc(usersRef, {
      uid: user.uid,
      name: firstName + " " + lastName,
      email,
      role,
      authProvider: "local",
      createdAt: serverTimestamp(),
    });

    toast.success("Signup successful! Check your email to verify.");
    return user;
  } catch (error) {
    console.error(error);
    if (error.code === "auth/email-already-in-use") {
      toast.error("Email is already in use.");
    } else if (error.code === "auth/invalid-email") {
      toast.error("Invalid email address.");
    } else {
      toast.error("Signup failed: " + (error.message || "Unknown error"));
    }
  }
};

export const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    if (!res.user.emailVerified) {
      toast.info("Please verify your email before logging in.");
      return { unverified: true, user: res.user };
    }
    toast.success("Logged in successfully");
    return res.user;
  } catch (error) {
    console.error(error);
    if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
      toast.error("Invalid email or password");
    } else {
      toast.error("Login failed: " + (error.message || "Unknown error"));
    }
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    toast.success("Logged out successfully");
  } catch (error) {
    console.error(error);
    toast.error("Logout failed");
  }
};

export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    toast.success("Password reset email sent!");
  } catch (error) {
    console.error(error);
    toast.error("Failed to send reset email");
  }
};

export const resendVerification = async (user) => {
  try {
    await sendEmailVerification(user);
    toast.success("Verification email resent!");
  } catch (error) {
    console.error(error);
    toast.error("Failed to resend verification email");
  }
};

export const googleLogin = async (role = "user") => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;

    const usersRef = collection(db, "users");
    const q = query(usersRef, where("uid", "==", user.uid));
    const docs = await getDocs(q);

    if (docs.empty) {
      await addDoc(usersRef, {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        role,
        authProvider: "google",
        createdAt: serverTimestamp(),
      });
    }

    toast.success("Logged in with Google");
    return user;
  } catch (error) {
    console.error(error);
    toast.error("Google login failed: " + (error.message || ""));
  }
};

export const facebookLogin = async (role = "user") => {
  try {
    const res = await signInWithPopup(auth, facebookProvider);
    const user = res.user;

    const usersRef = collection(db, "users");
    const q = query(usersRef, where("uid", "==", user.uid));
    const docs = await getDocs(q);

    if (docs.empty) {
      await addDoc(usersRef, {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        role,
        authProvider: "facebook",
        createdAt: serverTimestamp(),
      });
    }

    toast.success("Logged in with Facebook");
    return user;
  } catch (error) {
    console.error(error);
    toast.error("Facebook login failed: " + (error.message || ""));
  }
};
