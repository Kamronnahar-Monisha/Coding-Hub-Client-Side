import React from 'react';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { useState } from 'react';
import { createContext } from 'react';
import { useEffect } from 'react';


const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signInWithGithub=()=>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
        return ()=>unsubscribe();
    },[])

    const authInfo = {user,loading,signInWithGoogle,logOut,signInWithGithub};

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;