import Dialog from "../../components/dialog"
import Button from "../../components/button"

import { TextInputContainer } from "../../components/textInput/styled"
import { LPDialog, LPDialogFooter } from "./styled"

export function landingPageDialog(props) {
    const {
        show,
        setShow,
        activeDialog,
        setActiveDialog,
        refFields,
        submitForm
    } = props

    return <Dialog isOpen={show} handleClose={bool => setShow(bool)}>
        <LPDialog>
            <h1>{activeDialog}</h1>

            <TextInputContainer>
                <label>E-mail</label>
                <input ref={refFields.emailInputRef} type="email"/>
            </TextInputContainer>
            <TextInputContainer>
                <label>password</label>
                <input ref={refFields.passwordInputRef} type="password"/>
            </TextInputContainer>

            {
                activeDialog === "Sign up"
                    && <TextInputContainer>
                    <label>Confirm password</label>
                    <input ref={refFields.confirmPasswordInputRef} type="password"/>
                </TextInputContainer>
            }

            <Button
                expanded
                text={activeDialog}
                onClick={() => submitForm()}/>

            <hr/>

            <LPDialogFooter>
                <p>
                    {
                        activeDialog === 'Sign in'
                            ? "Don’t have an account?"
                            : "Already have an account?"
                    }
                </p>
                <button onClick={() => {
                    activeDialog === 'Sign in'
                        ? setActiveDialog('Sign up')
                        : setActiveDialog('Sign in')
                }}> 
                    {activeDialog === 'Sign in' ? 'Sign up' : 'Sign in'}
                </button>
            </LPDialogFooter>
        </LPDialog>
    </Dialog>
}