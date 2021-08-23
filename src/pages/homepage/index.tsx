import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

import Carousel1 from '../../../public/images/Carousel/Carousel1.png';
import Carousel2 from '../../../public/images/Carousel/Carousel2.jpg';

function HomePage () {

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
        {width: 500, itemsToShow: 1},
        {width: 780, itemsToShow: 1},
        {width: 1024, itemsToShow: 1},
        {width: 1200, itemsToShow: 1}
    ]

    return (
        <div id="mainSlider">
            <NavBar />
            
            <StyleCarousel>
                <Carousel breakPoints={breakPoints} isRTL={true}>
                    <Card>
                        <Image src={Carousel1} alt='carousel1' width={1200} height={1000}></Image>
                    </Card>
                    <Card>
                        <Image src={Carousel2} alt='carousel2' width={1000} height={800}></Image>
                    </Card>
                </Carousel>
            </StyleCarousel>    

            
            <Footer />
        </div>
    )
}

export default HomePage;

const BgArrow = "#ff0";
const BgIndicator = "#ff0";
const BgShadowIndicator = "#202020";
const FocusIndicator = "#2a2a2a";

export const Card = styled.div`
    width: 100%;
    height: 350px;
    background-color: none;
    font-size: 38px;
    margin: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    

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

