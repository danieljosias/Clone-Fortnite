import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

import noticia1 from '../../../public/images/Noticia/noticia1.jpg';
import noticia2 from '../../../public/images/Noticia/noticia2.jpg';
import noticia3 from '../../../public/images/Noticia/noticia3.jpg';
import noticia4 from '../../../public/images/Noticia/noticia4.jpg';

function Noticia() {

    async function getServerSideProps() {
        await new Promise((resolve) => {
          setTimeout(resolve, 500)
        })
        return { props: {} }
    }


    return (
        <div>
            <NavBar />
            
            <ContainerTitle>
                <Title>Notícias</Title>
            </ContainerTitle>

            <ContainerCard>
                
                    <Card>  
                        <ContainerImage>
                            <Image src={noticia1} alt='noticia1' width={280} height={200}></Image>
                        </ContainerImage>
                        <CardText>
                            <p><a target="_blank" href="https://www.epicgames.com/fortnite/pt-BR/news/fortnite-presents-the-rift-tour-featuring-ariana-grande">09 de Agosto de 2021</a></p>
                            <span>FORTNITE APRESENTA...<br/> TURNÊ DA FENDA COM ARIANA GRANDE.</span>
                        </CardText>
                    </Card>
                    <Card>
                        <ContainerImage>
                            <Image src={noticia2} alt='noticia2' width={280} height={200}></Image>
                        </ContainerImage>
                        <CardText>
                            <p><a target="_blank" href="https://www.epicgames.com/fortnite/pt-BR/news/guardian-of-the-galaxy-and-now-fortnite-gamora-arrives-to-protect-the-island">09 de Agosto de 2021</a></p>
                            <span>GUARDIÃ DA GALÁXIA E <br/>AGORA DO FORTNITE - GAMORA CHEGOU... </span>
                        </CardText>
                    </Card>
                    <Card>
                        <ContainerImage>
                            <Image src={noticia3} alt='noticia3' width={280} height={200}></Image>
                        </ContainerImage>
                        <CardText>
                            <p><a target="_blank" href="https://www.epicgames.com/fortnite/pt-BR/news/car-fortography-results">06 de Agosto de 2021</a></p>
                            <span>RESULTADOS DA FOTOGRAFIA DE CARRO!</span>
                        </CardText>
                    </Card>
                    <Card>
                        <ContainerImage>
                            <Image src={noticia4} alt='noticia4' width={280} height={200}></Image>
                        </ContainerImage>
                        <CardText>
                            <p><a target="_blank" href="https://www.epicgames.com/fortnite/pt-BR/news/now-in-fortnite-bloodsport">09 de Agosto de 2021</a></p>
                            <span>NOVIDADE DO FORTNITE; SANGUINARIO.</span>
                        </CardText>
                    </Card>
                
            </ContainerCard>    

            
            <Footer />
        </div>
    )
}

export default Noticia;

const BgContainerTitle = "#ff0";
const ColorBorder = "#FFF";
const ColorTitle = "#000";
const ColorBorderCard = "#FF0";
const BgBorderCard = "#2a2a2a";
const ColorLinkCardText = "#FF0";
const ColorSpanCardText = "#FFF";


export const ContainerTitle = styled.div`
    background-color: ${BgContainerTitle};
    height: 100px;
    margin-bottom: 55px;
    border-top: 1px solid ${ColorBorder};
    border-bottom: 1px solid ${ColorBorder};
    
    @media (max-width: 500px){
        height: 80px;
    }
`
export const Title = styled.h1`
   color: ${ColorTitle};
   text-align: center;
   padding-top:15px;
   animation: movetitle;
   animation-duration: 6s;

   @keyframes movetitle{
       0%{
        transform: translateX(670px);
       }

       50%{
        transform: translateX(0px);
       }

       100%{
        transform: translateX(0px);
       }
   }
        
     

   @media (max-width: 1024px){
      
    }

   @media (max-width: 780px){
      font-size: 18pt;
    }

   @media (max-width: 500px){
      font-size: 14pt;
      padding-top:20px;
    }
`

export const ContainerCard = styled.div`
    display: flex;
    justify-content: space-around;
    height: 550px;

    animation: movecard;
   animation-duration: 6s;

   @keyframes movecard{
       0%{
        transform: translateY(370px);
       }

       50%{
        transform: translateX(0px);
       }

       100%{
        transform: translateX(0px);
       }
   }

   @media (max-width: 500px){
    display: flex;
    flex-direction:column;
    justify-content: center;
    text-align: center;
    align-items: center;

    height: 1800px;
   }


`   

export const Card = styled.div`
    border: 1px solid ${ColorBorderCard};
    width: 280px;
    height: 400px;
    background-color: ${BgBorderCard};

    @media (max-width: 1024px){
        width: 220px;
        height: 400px;
    } 

    @media (max-width: 780px){
        width: 170px;
        height: 300px;
    } 

    @media (max-width: 500px){
        width: 400px;
        height: 650px;
        margin-bottom: 20px;

        img{
            width: 400px;
        }


    } 
`

export const ContainerImage = styled.div`
    filter: brightness(50%);
    cursor: pointer;

    &:hover{
        transition: all ease-in .3s;
        filter: brightness(1);
    }
`

export const CardText = styled.div`
    font-size: 12pt;
    text-align: center;
    

    a{
        text-decoration: none;
        color: ${ColorLinkCardText};
        font-weight: bold;
    }

    span{
        color: ${ColorSpanCardText};

        @media (max-width: 500px){
            font-size: 10pt;
        }

    }
`



