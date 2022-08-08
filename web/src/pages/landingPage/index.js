import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/button'
import { create, login } from '../../services/userApi'
import { landingPageDialog } from './dialog'

import { LPContainer, LPTextContainer, LPActionButtons } from './styled'

const LandingPage = () => {
    const [show, setShow] = useState(false)
    const [activeDialog, setActiveDialog] = useState(1)
    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const confirmPasswordInputRef = useRef()
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.clear();
    }, [])

    const submitForm = () => {
        let data = {
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value
        }

        if (activeDialog === 'Sign in') {
            login(data).then(response => {
                localStorage.setItem('userId', response.data.id)
                navigate('/home/all')
            })
        } else {
            data.password === confirmPasswordInputRef.current.value
                ? create(data)
                    .then(response => {
                        localStorage.setItem('userId', response.data.id)
                        navigate('/home/all')
                    })
                : console.warn('confirmation password failed')
        }
    }

    let dialogControl = {
        show: show,
        setShow: setShow,
        activeDialog: activeDialog,
        setActiveDialog: setActiveDialog,
        refFields: {emailInputRef, passwordInputRef, confirmPasswordInputRef},
        submitForm: submitForm
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

        { landingPageDialog(dialogControl) }
    </>
}

export default LandingPage