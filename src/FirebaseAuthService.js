import firebase from "./FirebaseConfig";

const auth = firebase.auth();

const registerUser = (email, password) => {
  console.log("registerUser");
  return auth.createUserWithEmailAndPassword(email, password);
};

const loginUser = (email, password) => {
  console.log("loginUser");
  return auth.signInWithEmailAndPassword(email, password);
};

const logoutUser = () => {
  console.log("logoutUser");
  return auth.signOut();
};

const sendPasswordResetEmail = (email) => {
  return auth.sendPasswordResetEmail(email);
};

const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  return auth.signInWithPopup(provider);
};

const subscribeToAuthChanges = (handleAuthChange) => {
  // console.log("subscribeToAuthChanges");
  auth.onAuthStateChanged((user) => {
    handleAuthChange(user);
  });
};

const FirebaseAuthService = {
  registerUser,
  loginUser,
  logoutUser,
  sendPasswordResetEmail,
  loginWithGoogle,
  subscribeToAuthChanges,
};

export default FirebaseAuthService;
