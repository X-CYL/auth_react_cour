import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider (props) {

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
        <UserContext.Provider value= {{modalState, toggleModals}}>
            { props.children }
        </UserContext.Provider>
    )
}