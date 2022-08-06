import { Container } from "./styled"

const Button = ({text, secondary, padding, onClick}) => 
    <Container secondary={secondary} padding={padding} onClick={() => onClick()}>
    {text}
</Container>

export default Button;