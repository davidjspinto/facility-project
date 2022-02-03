import React from "react";
import {useNavigate} from "react-router-dom"
import { useGlobalContext } from "../../Context/appContext";
import "./authentication.css";

const Authentication = () => {
    const {
        isRegisterLoginModalOpen, 
        isRegisterTabOpen,
        loginInput,
        openLoginTab, 
        openRegisterTab, 
        registerInput, 
        submitRegisterForm, 
        submitLoginForm,
        handleLoginInput, 
        handleRegisterInput} = useGlobalContext();
    
     
    return (
        <div>
        {isRegisterLoginModalOpen ?

            (<div className="formDisplay">

            {isRegisterTabOpen ? (
                <form className="formflexDirection" onSubmit={submitRegisterForm}>
                    <label for="username">Username</label>
                        <input className="input-field" type="text" name="username" value={registerInput.username} onChange={handleRegisterInput} size="15"/>
                    <label for="email">E-mail</label>
                        <input className="input-field" type="text" name="email" value={registerInput.email} onChange={handleRegisterInput}/>
                    <label for="password">Password</label>
                        <input className="input-field" type="text" name="password" value={registerInput.password} onChange={handleRegisterInput}/>
                    <button className="login-btn" type="submit">I Want To Register</button>    
                </form> 
            ) : (
                <form className="formflexDirection" onSubmit={submitLoginForm}>
                    <label for="email">E-mail</label>
                        <input className="input-field" type="text" name="email" value={loginInput.email} onChange={handleLoginInput}/>
                    <label for="password">Password</label>
                        <input className="input-field" type="text" name="password" value={loginInput.password} onChange={handleLoginInput}/>
                    <button className="login-btn" type="submit">I Want To Login</button>    
                </form> 
            )}
            <div className="tabs-position">
                <button className="login-tab-btn" type="button" onClick={openLoginTab}>Login</button>
                <button className="login-tab-btn" type="button" onClick={openRegisterTab}>Register</button>
            </div>
        </div>)
           
         : 
            null
        }
        </div>
    )
}

export default Authentication;