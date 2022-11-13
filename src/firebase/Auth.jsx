// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useContext } from "react";
import { createContext } from "react";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjf4ws-XV7Zc1S_Bq3A8v5D-3ewUWEvLs",
  authDomain: "e-comm-app-bootcamp.firebaseapp.com",
  projectId: "e-comm-app-bootcamp",
  storageBucket: "e-comm-app-bootcamp.appspot.com",
  messagingSenderId: "813016797416",
  appId: "1:813016797416:web:3062a6630f4ccf4461b95d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

function useProvideAuth() {
  const [user, setUser] = useState();

  const signUp = (auth, email, password, displayName) =>
    createUserWithEmailAndPassword(email, password).then(({ user }) => {
      updateProfile(user, { displayName });
      setUser(user);
      return user;
    });

  const signIn = (auth, email, password) =>
    signInWithEmailAndPassword(email, password).then(({ user }) => {
      setUser(user);
      return user;
    });

  const signOutUser = () => signOut(auth).then(() => setUser(null));

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser(null);
    });

    return () => unsubscribe();
  });

  return {
    signIn,
    signUp,
    signOut: signOutUser,
    user,
  };
}

export default AuthProvider;
