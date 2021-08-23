import React, { useState } from 'react';
import Link  from 'next/link';
import firebase from '../../firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../../theme';
import DarkButton from '../darkbutton/darkbutton';

toast.configure()
const RightNavBar = ({ open }) => {

  const logout = () => {
    firebase.auth().signOut();
    toast.success('Deslogado com sucesso', {position: toast.POSITION.TOP_LEFT})

  }

  const [theme, setTheme] = useState("lightTheme");

  const themeToggler = () => {
    theme === "lightTheme" ? setTheme("darkTheme") : setTheme("lightTheme");
  };

  return (
      <List open={open}>
        <Link href="/homepage"><li> <a>Principal</a> </li></Link>
        <Link href="/armas"><li> <a>Armas</a> </li></Link>
        <Link href="/personagens"><li> <a>Personagens</a> </li></Link>
        <Link href="/noticias"><li> <a>Notícias</a> </li></Link>
        
        <ThemeProvider theme={theme === 'lightTheme' ? lightTheme : darkTheme}>
          <GlobalStyles />
            <DarkButton onClick={() => themeToggler()}></DarkButton>
        </ThemeProvider>

        <Link href="/login"><Logout onClick={logout}>Sair</Logout></Link>
      </List>
  )
}

export default RightNavBar;

const ColorLinkList = '#FFF';
const HoverLinkList = '#FFF';
const BgList = '#2a2a2a';
const BgLogout = '#ff0';
const ColorBorderLogout = '#FFF';
const ColorLogout = '#000';
const ColorBorderList = '#ff0';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-right: 35px;
  z-index: 9999;

  li {
    padding: 5px 10px;
    cursor: pointer;
  }


  a{
      text-decoration: none;
      color: ${ColorLinkList};
      font-size: 12pt;
      font-weight: bold;

      &:hover{
        text-decoration: underline ${HoverLinkList};
        transition: all ease-in;
    
        }

    }
         
    
  @media (max-width: 1024px) {
    flex-flow: column nowrap;
    background-color: ${BgList};
    border: 1px solid ${ColorBorderList};
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    position: relative;
    top: -16px;
    left: 100px;
    right: -35px;
    height: 100vh;
    width: 300px;
    padding-top: 2.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 51;

    a {
      color: ${ColorLinkList};
    }

  }
`;

export const Logout = styled.button `
      background-color: ${BgLogout};
      border: 1px solid ${ColorBorderLogout};
      border-radius: 0px;
      width: 100px;
      height: 20px;
      margin-top: 5px;
      color: ${ColorLogout};
      font-size: 12pt;
      font-weight: bold;
      cursor: pointer;

      @media (max-width: 1024px){
        margin-left: 5px;
      }
    
`
