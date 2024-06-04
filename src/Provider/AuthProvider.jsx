import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();


    // _________Create User__________//
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
       };
    // _________Login User___________//
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    };
    const googleLogin = () =>{
    return signInWithPopup(auth, googleProvider);
    }
       useEffect(() =>{
        const unSubscriber = onAuthStateChanged(auth , (currentUser) =>{
            console.log(currentUser);
            setUser(currentUser); 
        })
        return unSubscriber;
       }, [auth])
    const authInfo = {
        user,
        createUser,
        loginUser,
        googleLogin,
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