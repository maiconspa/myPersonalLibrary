import React, { useState } from 'react'
import Button from '../../components/button'

import { Dialog } from '../../components/dialog'
import { LPContainer, LPTextContainer, LPActionButtons, LPDialog } from './styled'

const LandingPage = () => {

    const [show, setShow] = useState(false)
    const [activeDialog, setActiveDialog] = useState(1)

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

                {/* <TextInput label="E-mail"/>
                <TextInput label="Password"/>
                <TextInput label="Confirm password"/> */}

                <Button text={activeDialog} />

                <div>
                    <p>
                        {
                            activeDialog === 'Sign in'
                                ? "Don’t have an account?"
                                : "Already have an account?"
                        }
                    </p>
                    <button> {activeDialog} </button>
                </div>
            </LPDialog>
        </Dialog>
    </>
}

export default LandingPage