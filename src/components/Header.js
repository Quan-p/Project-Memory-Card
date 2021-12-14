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
`

export default Header