import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

import person1 from '../../../public/images/Person/person1.jpg';
import person2 from '../../../public/images/Person/person2.jpg';
import person3 from '../../../public/images/Person/person3.jpg';
import person4 from '../../../public/images/Person/person4.jpg';
import person5 from '../../../public/images/Person/person5.jpg';


function Personagens() {

    async function getServerSideProps() {
        await new Promise((resolve) => {
          setTimeout(resolve, 500)
        })
        return { props: {} }
    }

    type breakPointsType =  {
        width: number,
        itemsToShow: number,
    }

    let breakPoints: Array<breakPointsType> = [
        {width:0, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 1024, itemsToShow: 3}
    ]

    return (
        <div>
            <NavBar />
            
            <ContainerTitle>
                <Title>Personagens</Title>
            </ContainerTitle>

            <StyleCarousel>
                <Carousel breakPoints={breakPoints} isRTL={true}>
                    
                        <Card>
                            <Image src={person1} alt='person1' width={300} height={300}></Image>
                        </Card>
                        <Card>
                            <Image src={person2} alt='person2' width={300} height={300}></Image>
                        </Card>
                        <Card>
                            <Image src={person3} alt='person3' width={300} height={300}></Image>
                        </Card>
                        <Card>
                            <Image src={person4} alt='person4' width={300} height={300}></Image>
                        </Card>
                        <Card>
                            <Image src={person5} alt='person5' width={300} height={300}></Image>
                        </Card>
                    
                </Carousel>
            </StyleCarousel>    

            
            <Footer />
        </div>
    )
}

export default Personagens;

const BgContainerTitle = "#ff0";
const ColorBorder = "#FFF";
const ColorTitle = "#000";

const BgArrow = "#ff0";
const BgIndicator = "#ff0";
const BgShadowIndicator = "#202020";
const FocusIndicator = "#2a2a2a";

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
      padding-top:30px;
    }
`

export const ContainerCard = styled.div`
    


`

export const Card = styled.div`
    width: 100%;
    height: 350px;
    background-color: none;
    font-size: 38px;
    margin: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;

   animation: movecard;
   animation-duration: 6s;

   @keyframes movecard{
       0%{
        transform: translateX(200px);
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

    
`

export const StyleCarousel = styled.div`
    margin-top: 20px;
    margin-bottom: 120px;
    
    .rec.rec-arrow {
    border-radius: 0px;
    margin: 10px;
    background: ${BgArrow};
    }

    .rec.rec-arrow:hover {
    border-radius: 50%;
    }

    .rec.rec-dot_active{
        background-color: ${BgIndicator};
        box-shadow: 0 0 1px 3px ${BgShadowIndicator};

        &:focus{
            box-shadow: 0 0 1px 3px ${FocusIndicator};
        }
    }

`   

