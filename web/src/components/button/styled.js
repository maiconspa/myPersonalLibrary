import styled from "styled-components";

export const Container = styled.button`
    padding: ${props => props.padding ?? "5px 30px"};
    background: ${props => props.secondary ? "transparent" : "#D9AA63"};
    cursor: pointer;

    font-size: 20px;
    font-weight: bold;

    border: none;
    border-radius: 25px;
    box-shadow: ${props => props.secondary ? "" : "0px 4px 4px rgba(0, 0, 0, 0.25)"};
`

