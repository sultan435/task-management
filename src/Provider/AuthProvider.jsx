import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isLoading,setIsLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()


    const createUser = (email, password)=>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loggedUser = (email, password)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = ()=>{
        return signOut(auth)
    }

    const updateUserProfile = (name, photo)=>{
        return updateProfile(auth.currentUser, {
            displayName:name,
            photoURL: photo
        })
    }

    const googleUser = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setIsLoading(false)
            console.log('login user stay', currentUser)
        })
        return()=>{
            return unsubscribe
        }
    },[])

    const authInfo = {
        user,
        isLoading,
        createUser,
        loggedUser,
        logout,
        updateUserProfile,
        googleUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;