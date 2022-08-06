import { Container } from "./styled"

const Button = ({text, secondary, padding}) => {

    return <Container secondary={secondary} padding={padding}>
        {text}
    </Container>
}

export default Button;