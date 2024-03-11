import "../App.css";
import { useEffect, useState } from "react";
import { auth, registerWithEmailAndPassword } from "../firebase";
import { Navigate, Link } from "react-router-dom";

function Signup({ user }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (user != null) {
            return <Navigate to=".." />;
        }
    }, [user]);

    const handleSignUp = () => {
        registerWithEmailAndPassword(username, email, password);
    };

    return (
        <>
            <div className="w-full fixed h-full flex flex-col items-center justify-center">
                <div className="h-full bg-slate-500 py-40 px-40 flex flex-col items-center">
                    <h1 className="mb-1 font-serif">Sign Up</h1>
                    <input
                        className="mb-1 font-serif textInput hover:animate-pulse"
                        id='username'
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className="mb-1 font-serif textInput"
                        type='email'
                        id='email'
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        className="mb-1 font-serif textInput"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex justify-between w-full mb-1">
                        <button
                            className="font-serif btn hover:animate-pulse"
                            onClick={handleSignUp}
                        >
                            Sign up
                        </button>
                        <Link to="/login">
                            <button className="btn font-mono">Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;