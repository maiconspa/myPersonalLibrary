
import { Container, DialogBox, Close } from './styled'

const Dialog = props => {
    const { isOpen, children, handleClose } = props
    
    return isOpen && <Container isOpen={isOpen}>
        <DialogBox {...props}>
            {handleClose && <Close onClick={() => handleClose(false)}>&times;</Close>}
            {children}
        </DialogBox>
    </Container>
}

export default Dialog