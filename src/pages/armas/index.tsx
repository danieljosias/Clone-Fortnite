import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';


function Armas() {

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
                <Title>SMGS</Title>
            </ContainerTitle>

            <StyleCarousel>
                <Carousel breakPoints={breakPoints} isRTL={true}>
                    <Card>
                        <img src={'https://d2skuhm0vrry40.cloudfront.net/2018/articles/2018-07-17-17-28/Fortnite_2Fpatch_notes_2Fv5_0_content_update_2Foverview_text_v5_0_content_update_2FBR05_Social__MP5_1920x1080_92d8fbc439d938a06236ba319bbc64396ad2d3ca.jpg/EG11/resize/690x-1/quality/75/format/jpg'} alt='smgs1' width={300} height={300}></img>
                    </Card>
                    <Card>
                        <img src={'https://assets2.rockpapershotgun.com/fortnite-suppressed-smg.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/fortnite-suppressed-smg.jpg'} alt='smgs2' width={300} height={300}></img>
                    </Card>
                    <Card>
                        <img src={'https://playreplay.com.br/wp-content/uploads/2018/07/fortnite-smg-compacta-850x478.jpg'} alt='smgs3' width={300} height={300}></img>
                    </Card>
                    <Card>
                        <img src={'https://cdn2.unrealengine.com/Fortnite%2Fpatch-notes%2Fv9-10-content-update%2F09BR_BurstSMG_NewsHeader-1920x1080-accc481deb967128b4fe6416590755e31fc59f18.jpg'} alt='smgs4' width={300} height={300}></img>
                    </Card>
                    <Card>
                        <img src={'https://cdn1.dotesports.com/wp-content/uploads/2019/07/06081633/TacticalSMG14DaysFort.jpeg'} alt='smgs5' width={300} height={300}></img>
                    </Card>
                </Carousel>
            </StyleCarousel>    
            
            <ContainerTitle>
                <Title>Spingarda</Title>
            </ContainerTitle>

            <StyleCarousel>
                <Carousel breakPoints={breakPoints} isRTL={true}>
                    <Card>
                        <img src={'https://cdn2.unrealengine.com/Fortnite%2Fpatch-notes%2Fv9-40%2Fheader-v9-40%2F09_TopTierTacticalShotgun_NewsHeader-1920x1080-b3a5b8f56e939989a69605c2af716474d93ac68c.jpg'} alt='espingarda1' width={300} height={300}></img>
                        
                    </Card>
                    <Card>
                        <img src={'https://estnn.com/wp-content/uploads/2020/07/Epic_Pump_Shotgun_800x450.jpg'} alt='espingarda2' width={300} height={300}></img>
                    </Card>
                    <Card>
                        <img src={'https://cdn1.dotesports.com/wp-content/uploads/sites/3/2018/08/09113203/8701a1be-c5e6-490c-b971-57d5e50f9b8e.png'} alt='espingarda3' width={300} height={300}></img>
                    </Card>
                    <Card>
                        <img src={'https://xboxplay.games/uploadStream/9043.jpg'} alt='espingarda4' width={300} height={300}></img>
                    </Card>
                    <Card>
                        <img src={'data:image/jpeg;base64,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'} alt='espingarda5' width={300} height={300}></img>
                    </Card>
                </Carousel>
            </StyleCarousel>  

            <ContainerTitle>
                <Title>Pistola</Title>
            </ContainerTitle>

            <StyleCarousel>
                <Carousel breakPoints={breakPoints} isRTL={true}>
                    <Card>
                        <img src={'https://cdn2.unrealengine.com/Fortnite%2Fpatch-notes%2Fv8-12%2Fheader-v8-12%2F08BR_Flint-KnockPistol_NewsHeader-1920x1080-6b2341f3a423b12aea9acd23816c30e6eec39764.jpg'} alt='pistola1' width={300} height={300}></img>
                    </Card>
                    <Card>
                        <img src={'https://xboxplay.games/imagenes/redimensionar2.php?imagen=https://xboxplay.games/uploadStream/17223.jpg&an=722&al=400'} alt='pistola2' width={300} height={300}></img>
                    </Card>
                    <Card>
                        <img src={'https://s2.glbimg.com/vxsMflR3whdX4S5ESWSeLtGoCKg=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/K/1/USKh8OTUSG1dQ8Iz7ooQ/hand-cannon-legendary.jpg'} alt='pistola3' width={300} height={300}></img>
                    </Card>
                    <Card>
                        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ZfKgKBhcF2id-lRNhTNZ8jv0H-Bh04Tscw&usqp=CAU'} alt='pistola4' width={300} height={300}></img>
                    </Card>
                    <Card>
                        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWugTL6v8b12HUuK4d7IOesIDVAdHoHhiLSw&usqp=CAU  '} alt='pistola5' width={300} height={300}></img>
                    </Card>
                </Carousel>
            </StyleCarousel>  
            

            
            <Footer />
        </div>
    )
}

export default Armas;

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

