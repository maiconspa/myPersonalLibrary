import styled, {css, keyframes} from 'styled-components'

const show = keyframes`
    from {opacity: 0;}
    to {opacity: 1}
`

export const Container = styled.div `
    display:flex;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.01);
    justify-content: center;
    align-items: center;
    z-index: 999;
    backdrop-filter: blur(15px);
    opacity: 1;
    ${({isOpen}) => isOpen && css`
        animation: ${show} .3s ease-out;
    `}
`
export const DialogBox = styled.div ` 
    width: ${({width}) => width ?? 'auto'};
    height: ${({height}) => height ?? 'auto'};
    padding: 32px;
    background: #F9F3EE;
    border-radius: 40px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
`

export const Close = styled.span`
    float: right;
    height: fit-content;
    font-size: 28px;
    font-weight: bold;
    :hover, :focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
`