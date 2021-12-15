import React from "react";
import styled from "styled-components";

const Header = () => {
    return (
        <>
            <HeaderWrapper>
                Memory Game
            </HeaderWrapper>
        </>
    )
}

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    padding: 20px;
    border-bottom: 10px double #b4ba5c;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #3f411c;
    color: #ccc7b3;
    background-color: #f4ece4;
`

export default Header