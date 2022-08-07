import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

import Button from '../../components/button'
import Dialog from '../../components/dialog'
import { create, login } from '../../services/userApi'
import { LPContainer, LPTextContainer, LPActionButtons, LPDialog, TextInputContainer } from './styled'

const LandingPage = () => {

    const [show, setShow] = useState(false)
    const [activeDialog, setActiveDialog] = useState(1)
    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const ConfirmPasswordInputRef = useRef()
    const navigate = useNavigate()

    const submitForm = () => {

        let data = {
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value
        }

        if (activeDialog === 'Sign in') {
            login(data).then(response => {
                console.log('response', response)
                localStorage.setItem('userId', response.data.id)
                navigate('/home')
            })
        } else {
            data.password === ConfirmPasswordInputRef.current.value
                ? create(data)
                    .then(response => {
                        console.log('response', response)
                        localStorage.setItem('userId', response.data.id)
                        navigate('/home')
                    })
                : console.warn('confirmation password failed')
        }

        console.log(data)
    }

    return <>
        <LPContainer>
            <LPActionButtons>
                <Button
                    onClick={() => { setShow(true); setActiveDialog("Sign in") }}
                    text="SIGN IN"
                    padding="5px 15px"
                    secondary/>

                <Button
                    onClick={() => { setShow(true); setActiveDialog("Sign up") }}
                    text="SIGN UP"/>
            </LPActionButtons>
            
            <LPTextContainer>
                <h1>Welcome to</h1>
                <h1>My Personal Library</h1>
                <h3>Make yourself at home!</h3>
            </LPTextContainer>
        </LPContainer>

        <Dialog isOpen={show} handleClose={bool => setShow(bool)}>
            <LPDialog>
                <h1>{activeDialog}</h1>

                <TextInputContainer>
                    <label>E-mail</label>
                    <input ref={emailInputRef} type="email"/>
                </TextInputContainer>
                <TextInputContainer>
                    <label>password</label>
                    <input ref={passwordInputRef} type="password"/>
                </TextInputContainer>

                {
                    activeDialog === "Sign up"
                        && <TextInputContainer>
                        <label>Confirm password</label>
                        <input ref={ConfirmPasswordInputRef}/>
                    </TextInputContainer>
                }

                <Button
                    expanded
                    text={activeDialog}
                    onClick={() => submitForm()}/>

                <hr/>

                <div>
                    <p>
                        {
                            activeDialog === 'Sign in'
                                ? "Don’t have an account?"
                                : "Already have an account?"
                        }
                    </p>
                    <button onClick={() => activeDialog === 'Sign in' ? setActiveDialog('Sign up') : setActiveDialog('Sign in')}> 
                        {activeDialog === 'Sign in' ? 'Sign up' : 'Sign in'}
                    </button>
                </div>
            </LPDialog>
        </Dialog>
    </>
}

export default LandingPage