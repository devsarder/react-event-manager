import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import app from "../firebase/firebase.config";
const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState("hello");
  // create user in via mail
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user observer
  useEffect(() => {
    const unsubscribe = () => {
      onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
    };
    return () => unsubscribe();
  }, []);

  // sign in user with password && email

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign out handler
  const logOut = () => {
    return signOut(auth);
  };
  const authInfo = {
    user,
    createUser,
    signInUser,
    logOut,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProviders;

AuthProviders.propTypes = {
  children: PropTypes.node,
};
