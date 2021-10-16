import { useState } from "react";
import FirebaseAuthService from "./FirebaseAuthService";
import LoginForm from "./components/LoginForm";
import "./App.scss";

function App() {
  const [user, setUser] = useState(null);

  FirebaseAuthService.subscribeToAuthChanges(setUser);

  return (
    <div className="App">
      <div className="title-row">
        <div className="title">firebase recipes</div>
        <LoginForm existingUser={user} />
      </div>
    </div>
  );
}

export default App;
