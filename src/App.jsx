import "./App.css";
import Todo from "./Pages/Todo";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  const [avatarImg, setAvatarImg] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={<Todo user={user} setUser={setUser} avatarImg={avatarImg} setAvatarImg={setAvatarImg} />}
          exact
        />
        <Route path="/login" element={<Login user={user} setUser={setUser} />} />
      </Routes>
    </Router>
  );
}

export default App;