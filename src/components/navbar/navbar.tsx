import React from 'react';
import styled from 'styled-components';
import Burger from './burger';

const Logo = () => {
  return (
    <Nav>
      <div className="logo">
        Fortnite
      </div>
      <Burger />
    </Nav>
  )
}

export default Logo;

const ColorLogo = '#FFF';
const BgNav = '#2a2a2a';
const ColorBorderNav = '#FFF';

export const Nav = styled.nav`
  
  height: 55px;

  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  background: ${BgNav};
  border-bottom: 1px solid ${ColorBorderNav};
  
  .logo {
    padding: 20px 0;
    color: ${ColorLogo};
  
    font-size: 14pt;
    font-weight: bold;
    cursor: pointer;

    @media (max-width: 500px){
      font-size: 16pt;
    }
  }
`