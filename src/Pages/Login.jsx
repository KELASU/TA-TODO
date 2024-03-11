import "../App.css";
import { useEffect, useState } from "react";
import { auth, loginWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { Link, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [user] = useAuthState(auth); // Listen to authentication state changes
    const handleLogin = async () => {
        try {
            await loginWithEmailAndPassword(email, password); // Sign in with email and password
        } catch (error) {
            console.error(error.message); // Handle any errors
            alert(error.message); // Display error message to the user
        }
    };

    if (user) {
        return <Navigate to=".." />;
    }

    return (
        <div className="w-full fixed h-full flex flex-col items-center justify-center">
            <div className="h-full bg-slate-500 py-40 px-40 flex flex-col items-center">
                <h1 className="mb-1 text-center font-serif">Login</h1>
                <input
                    className="mb-1 font-serif login textInput  hover:animate-pulse"
                    type='email'
                    id='email'
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    className="mb-1 font-serif textInput  hover:animate-pulse"
                    placeholder="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex justify-between w-full mb-1">
                    <button className="font-serif btn hover:animate-bounce" onClick={handleLogin}>Log in</button>
                    <Link to="/signup">
                        <button className="font-serif btn hover:animate-bounce">Sign up</button>
                    </Link>
                </div>
                <button className="btn font-serif hover:animate-bounce" onClick={signInWithGoogle}>Sign in with Google</button>
            </div>
        </div>
    );
}

export default Login;