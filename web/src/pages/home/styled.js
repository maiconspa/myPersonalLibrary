import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 40px 0;
    column-gap: 40px;
`

export const ContentPanel = styled.div`
    width: 100%;
    padding: 30px;
    margin-right: 40px;

    background: #F9F3EE;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
`

export const Header = styled.div`
    display: flex;
    width: 100%;

    > div {
        display: flex;
    }

    > div > button {
        display: flex;
        background-color: #F9F3EE;
        justify-content: center;
        align-items: center;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border-color: #D9AA63;
        border-width: 1px;
        border-style: solid
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`