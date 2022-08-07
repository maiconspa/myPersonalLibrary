import { Container } from "./styled"

const Button = ({text, secondary, padding, onClick, expanded}) => 
    <Container
        secondary={secondary}
        padding={padding}
        onClick={() => onClick()}
        expanded={expanded}>
    {text}
</Container>

export default Button;