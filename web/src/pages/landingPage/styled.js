import styled from "styled-components";

export const LPContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
`

export const LPTextContainer = styled.div`
    position: absolute;
    display: block;
    padding-left: 100px;

    h1 {
        font-family: 'Libre Caslon Text';
        font-weight: 700;
        font-size: 50px;
    }

    h3 {
        font-family: 'Libre Caslon Text';
        font-weight: 700;
        font-size: 30px;

        color: #D9AA63;
        text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    }
`

export const LPActionButtons = styled.div`
    
    position: fixed;
    top: 20px;
    right: 20px;
    display: flex;
    justify-items: end;
`