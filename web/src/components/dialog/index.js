
import { Container, DialogBox, Close } from './styled'

export const Dialog = props => {
    const { isOpen, children, handleClose } = props
    
    return isOpen && <Container isOpen={isOpen}>
        <DialogBox {...props}>
            {handleClose && <Close onClick={() => handleClose(false)}>&times;</Close>}
            {children}
        </DialogBox>
    </Container>
}