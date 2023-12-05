import React, { useContext, useRef, useState } from 'react';
import { UserContext } from './context/UserContext';

export default function SignUpModal() {

    const {modalState, toggleModals, signUp} = useContext(UserContext);
    console.log(signUp)

    const[validation, setValidation] = useState("");
    
    const inputs =useRef([])
    const addInputs = el => {  //el = element que l'on va selectionner
        if(el && !inputs.current.includes(el)){ // si (element existe && s'il n'est pas déjà dans le tableau)
            inputs.current.push(el) // alors je le rajoute dedans
        }
    }
    const formRef = useRef();
    const handleForm  = async e => {
        e.preventDefault()
        //conditons de vérification des mots de passes (longueur et identicité)
        //vérifier la longueur du mot de passe 1 et du mot de passe 2 
        if((inputs.current[1].value.length || inputs.current[2].value.length) < 6){ //si current 1 ou current 2 < 6  message erreur
            setValidation("Attention, 6 caractères minimum demandés")
            return;
        }
        //vérifier que les deux mots de passes sont strictement identiques
        else if(inputs.current[1].value !== inputs.current[2].value){
            setValidation ("les 2 mots de passe sont differents")
            return;
        }
        try {
            const cred = await signUp(
                inputs.current[0].value,
                inputs.current[1].value
            )
            formRef.current.reset();
            setValidation("")
            console.log(cred);

        } catch(err){

        }
    }

  return (
    <>
        {modalState.SignUpModal && (

        <div className ="position-fixed top-0 vw-100 vh-100">
            <div
            onClick={() => toggleModals("close")} 
            className ="w-100 h-100 bg-dark bg-opacity-75">
            </div>
                <div className ="position-absolute top-50 start-50 translate-middle" style={{minWidth:"400px"}}>
                    <div className="modal-dialog">
                        <div className = "modal-content">
                            <div className ="modal-header">
                                <h5 className ="modal-title">
                                    Sign-Up
                                </h5>
                                <button 
                                onClick={()=> toggleModals("close")}
                                className ="btn-close"></button>
                            </div>
                            <div className ="modal-body">
                                <form ref={formRef} onSubmit={handleForm} className ="sign-up-form">
                                    <div className ="mb-3">
                                        <label htmlFor ="signUpEmail"> 
                                        Email adress
                                        </label>
                                        <input ref={addInputs} type ="email" name ="email" className ="form-control" required id ="signUpEmail"></input>
                                    </div>
                                    <div className ="mb-3">
                                        <label htmlFor ="signUpPwd" className ="form-label"> 
                                        Password
                                        </label>
                                        <input ref={addInputs} type ="password" name ="pwd" className ="form-control" required id ="signUpPwd"></input>
                                    </div>
                                    <div className ="mb-3">
                                        <label htmlFor ="repeatPwd"className ="form-label"> 
                                        Repeat Password
                                        </label>
                                        <input ref={addInputs} type ="password" name ="pwd" className ="form-control" required id ="repeatPwd"></input>
                                        <p className ="text-danger mt-1">{validation}</p>
                                    </div>
                                    <button className='btn btn-primary'> Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
        )}
    </>
  )
}
