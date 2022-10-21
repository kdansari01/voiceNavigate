import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKkjtPlU_9nHLUYCmDsjRC-YCLVeEr_m0",
  authDomain: "login-d5c13.firebaseapp.com",
  projectId: "login-d5c13",
  storageBucket: "login-d5c13.appspot.com",
  messagingSenderId: "702034938035",
  appId: "1:702034938035:web:5fa753d16d50dcb7ce08c6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  await signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log("error", error);
    });
};
