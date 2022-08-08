import styled from "styled-components"

export const TextInputContainer = styled.div`
    display: block;

    > label {
        display: block;
    }

    > input {
        display: block;
        height: 30px;
        background: transparent;
        line-height: 30px;
        border-color: #000;
        border-width: 1px;
        border-radius: 5px;

        font-size: 20px;
    }
`