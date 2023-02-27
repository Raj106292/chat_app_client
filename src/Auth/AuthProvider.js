import React, { createContext, useEffect, useState } from 'react';
import {
    getAuth,
    signOut,
    updateProfile,
    signInWithPopup,
    onAuthStateChanged,
    GoogleAuthProvider,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth';
import app from '../Firebase/firebase.config';

const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // create an user with email and password
    const createNewUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // user log in with email & password
    const userLogIn = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // user login by google
    const createUserByGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // update user name and image
    const updateUserDetails = (name, imageURL) => {
        setIsLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: imageURL
        })
    }

    // verify user email
    const verificationEmail = (email) => {
        setIsLoading(true);
        return sendEmailVerification(auth.currentUser);
    }

    // forget password
    const passwordRecovery = (email) => {
        setIsLoading(true);
        return sendPasswordResetEmail(auth, email);
    }

    // user log out
    const userLogOut = () => {
        setIsLoading(true);
        return signOut(auth);
    }

    // get the currently signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        isLoading,
        userLogIn,
        userLogOut,
        createNewUser,
        passwordRecovery,
        verificationEmail,
        updateUserDetails,
        createUserByGoogle,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
