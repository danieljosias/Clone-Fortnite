import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

function footer() {

    const scrollTopo = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <ContainerFooter>
            <Footer>
                <ul>
                    <Link href="/privacidade"><li>Política de Privacidade</li></Link>
                    <li>Daniel Josias © 2021</li>
                    <li>Fortnite@gmail.com</li>

                    <ContainerButton>
                        <button onClick={scrollTopo}> 🠹 </button>
                    </ContainerButton>
                </ul>
            </Footer>
        </ContainerFooter>
    )
}

export default footer;

const BgContainerFooter = '#2a2a2a';
const ColorItemList = "#FFF";
const ColorBorderContainerFooter = "#FFF";
const HoverItemList = "#ff0";
const HoverButton = "#ff0";

export const ContainerFooter = styled.div`
   background-color: ${BgContainerFooter};
   height: 260px;
   border-top: 1px solid ${ColorBorderContainerFooter};
  
`
export const Footer = styled.footer`
     padding-top: 45px;

   ul{
        text-align: center;
       list-style: none;
       display: flex;
       flex-direction: column;

       li{
        
           padding-bottom:25px;
           font-size: 18pt;
           color: ${ColorItemList};
           cursor: pointer;

           &:hover{
               color: ${HoverItemList};
           }

        @media (max-width: 1024px){
            padding: 0 15px;
            padding-bottom:25px;
        }

        @media (max-width: 780px){
            font-size: 14pt;
        }

        @media (max-width: 500px){
            font-size: 12pt;
            padding-top: 5px;
            position: relative;
            left: -10px;
        }

       }

       a{
           text-decoration: none;
            
           
       } 
   }


`

export const ContainerButton = styled.div`
    

    button{
        cursor: pointer;
        position: relative;
        left: 500px;
        top:-30px;
        width: 40px;
        height: 40px;
        font-size: 18pt;
        border: none;

        &:hover{
            color: ${HoverButton};
        }

        @media (max-width: 1024px){
        position: relative;
        left: 400px;
        top:-30px;
        }

        @media (max-width: 780px){
        position: relative;
        left: 300px;
        top:-10px;
        }

        @media (max-width: 500px){
        position: relative;
        left: 170px;
        top:-10px;
        }
    }   

    

`