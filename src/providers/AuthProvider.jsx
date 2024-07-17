import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(false);
  const auth = getAuth(app);
  // ===================== USER REGISTRATION ========================//
  const register = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // ===================== USER LOGIN ========================//
  const login = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // ===================== SET USER OBSERVER ========================//
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setLoader(false);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // ===================== SEND PASSWORD RESET EMAIL========================//

  const forgetPassword = (email) => {
    setLoader(true);
    return sendPasswordResetEmail(auth, email);
  };
  // ===================== GOOGLE SIGN IN USER ========================//
  const googleprovider = new GoogleAuthProvider();

  const google = () => {
    setLoader(true);
    return signInWithPopup(auth, googleprovider);
  };
  // ===================== LOGOUT USER ========================//
  const logout = () => {
    setLoader(true);
    return signOut(auth);
  };
  const authInfo = {
    user,
    loader,
    register,
    login,
    logout,
    forgetPassword,
    google,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
