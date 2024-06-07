import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();


    // _________Create User__________//
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
       };
    // _________Login User___________//
    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };
    const googleLogin = () =>{
        setLoading(true)
    return signInWithPopup(auth, googleProvider);
    };
    const logOut = () =>{
        setLoading(true)
        signOut(auth);
    }
       useEffect(() =>{
        const unSubscriber = onAuthStateChanged(auth , (currentUser) =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
            
        })
        return unSubscriber;
       }, [auth])
    const authInfo = {
        user,
        createUser,
        loginUser,
        googleLogin,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.object
}