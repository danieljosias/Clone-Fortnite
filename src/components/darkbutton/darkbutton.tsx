import React from 'react';
import styled from 'styled-components';

const DarkButton = ({ onClick }) => (
    <StyledButton onClick={onClick}>
        Dark Mode
    </StyledButton>
)

const ColorTextButton = '#000';
const BgButton = '#ff0';
const ColorBorderButton = '#FFF';

export const StyledButton = styled.button`
border-radius: 0px;
border: 0;
width: 100px;
height: 20px;

margin-bottom: 1rem;
margin-right: 30px;
margin-top: 5px;
margin-left: 15px;

font-size: 12pt;

cursor: pointer;

color: ${ColorTextButton};
background: ${BgButton};
border: 1px solid ${ColorBorderButton};
font-weight: bold;
cursor: pointer;

@media (max-width: 1024px){
    margin-left: 5px;
}
`
export default DarkButton;