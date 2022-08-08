import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 40px 0;
    column-gap: 40px;
`

export const ContentPanel = styled.div`
    width: 100%;
    margin-right: 40px;

    background: #F9F3EE;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
`

export const Header = styled.div`
    display: flex;
    padding: 30px 30px;
    justify-content: space-between;

    > div {
        display: flex;
        gap: 20px;
    }

    > div > button {
        display: flex;
        background-color: #F9F3EE;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border-color: #D9AA63;
        border-width: 1px;
        border-style: solid;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`

export const HomeTitle = styled.div`
    >svg {
        width: 40px;
        height: 40px;
    }

    >h2 {
        margin: 0;
        padding: 0;
        font-size: 30px;
    }
`

export const BookOrganizer = styled.div`
    display: flex;
    gap: 20px;
    padding: 0 60px;
`