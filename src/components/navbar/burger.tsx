import React, { useState } from 'react';
import styled from 'styled-components';
import RightNavBar from './rightnavbar';

const Burger = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNavBar open={open}/>
    </>
  )
}

export default Burger;

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
  left: 600px;
  top: 15px;
  right: 20px;
  display: none;
  cursor: pointer;
  z-index: 53;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    right: 25px;

  }

  @media (max-width: 780px){
    position: relative;
    left: 500px;
    top: 15px;
    right: 20px;
    } 

  @media (max-width: 500px){
    position: relative;
    left: 325px;
    top: 15px;
    right: 20px;
      
    }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ff0' : '#ff0'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    @media (max-width: 500px){
      height: 0.20rem;
    }

    /*animação do menu */
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;