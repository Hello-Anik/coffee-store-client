import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase/firebase.init';
const AuthProvider = ({children}) => {
   

    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

     const userInfo = {
       createUser,
       loginUser,
    }
    return (
        <AuthContext value={userInfo}> {children}</AuthContext>
    );
};

export default AuthProvider;