import { createContext, useState } from "react";

//il faut imorter les methodes de firebase pour inscrire kes utilisateurs dans la base
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged 
} from "firebase/auth"
import { auth }from "../../firebase-config"


export const UserContext = createContext();

export function UserContextProvider (props) {

    const [currentUser, setCurrentUser] = useState();
    const [loadingData, setLoadinData] = useState(true);

    const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)

    // ci dessous la partie modal

    const [modalState, setModalState] = useState({
        SignUpModal: false,
        SignInModal: false
    })
    const toggleModals = modal => {
        if(modal === "signIn"){
            setModalState({
                SignUpModal: false,
                SignInModal: true
            })
        }
        if(modal === "signUp"){
            setModalState({
                SignUpModal: true,
                SignInModal: false
            })
        }
        if(modal === "close"){
            setModalState({
                signUpModal: false,
                signInModal: false
            })
        }
    }

    return(
        <UserContext.Provider value= {{modalState, toggleModals, signUp}}>
            { props.children }
        </UserContext.Provider>
    )
}