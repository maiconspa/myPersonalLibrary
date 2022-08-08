import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    width: 200px;
    height: calc(100vh - 80px);
    padding: 20px 15px 20px 0;

    align-content: space-between;

    background: #D9AA63;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 0px 40px 40px 0px;

    h2 {
        margin-left: 15px;
    }

    p {
        margin-left: 15px;
        font-weight: bold;
    }

    a {
        text-decoration: none;
        color: #000;
        display: flex;
        align-items: center;
    }

    ul {
        display: grid;
        gap: 10px;
        padding: 0;
    }

    li {
        list-style: none;
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: bold;
        padding: 3px 0;
    }

    svg {
        width: 20px;
        margin: 0 10px 0 15px;
    }

    button {
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
    }

    >button {
        display: flex;
        background: none;
        border: none;
        padding: 0;
        text-align: start;
        align-items: center;
    }
`

export const ListItem = styled.li`
    background: ${props => props.active ? "#F0E3CE" : "none"};
    box-shadow: ${props => props.active ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none"};
    border-radius: ${props => props.active ? "0px 25px 25px 0px" : "0"};
`