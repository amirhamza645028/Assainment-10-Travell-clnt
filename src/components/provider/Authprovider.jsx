import { createContext, useEffect, useState, } from "react";
import {
    FacebookAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth/cordova";
import app from "../fribase/firebase.config";

const auth = getAuth(app)

 export const Authcontext = createContext(null)


const Authprovider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const [loadingg, setLoadingg] = useState(true)
    const [currentuser, setUser] = useState(null)

    const createUser = (email, password) => {
        setLoadingg(true)
        return (createUserWithEmailAndPassword(auth, email, password))
    }

    const logInuser = (email, password) => {
        setLoadingg(true)
        return (signInWithEmailAndPassword(auth, email, password))
    }

    const googleLogin = () => {
        setLoadingg(true)
        return (signInWithPopup(auth, googleProvider))
    }
    const githubleLogin = () => {
        setLoadingg(true)
        return (signInWithPopup(auth, githubProvider))
    }
    const facebookLogin = () => {
        setLoadingg(true)
        return (signInWithPopup(auth, facebookProvider))
    }

    const updateUserprofile = (name, image) => {
        return (updateProfile(auth, currentuser ,{
            displayName: name,
            PhotoURL: image
        }))
    }
    useEffect(()=>{
        const unsubscirbe = onAuthStateChanged(auth,currentuser =>{
            setUser(currentuser)
            setLoadingg(false)
        });
        return()=>{
            unsubscirbe();
        }
        
    },[setLoadingg])

    const loginOut = ()=>{
        signOut(auth)
        setUser(null)
        setLoadingg(false)
    }

    const authinfo = {
        currentuser,
        loadingg,
        createUser,
        logInuser,
        googleLogin,
        githubleLogin,
        facebookLogin,
        updateUserprofile,
        loginOut
    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;