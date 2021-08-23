import React, {Component} from 'react';
import Link from 'next/link';
import Router from 'next/router'
import firebase from '../../firebase';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
class Login extends React.Component{

     Login(){
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((u) => {
            
            toast.success('Login bem sucedido', {position: toast.POSITION.TOP_LEFT})
        })
        .catch((err) => {
            toast.error('Ocorreu algum erro', {position: toast.POSITION.TOP_LEFT})

            if(err){
                Router.push('/login')
            }
        }) 
    }

     signUp(){
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((u) => {
            toast.success('Cadastro bem sucedido', {position: toast.POSITION.TOP_LEFT})
        })
        .catch((err) => {
            toast.error('Ocorreu algum erro', {position: toast.POSITION.TOP_LEFT})
        })
    }

    render(){
        return (
            <div>
               
                <ContainerLogin>
                    <ContainerTransparent>
                   
                    <ContainerTitle>
                        <Title>Entrar</Title>
                    </ContainerTitle>

                    <ContainerInput>
                        <Input
                        type="text"
                        placeholder="email"
                        autoFocus
                        id="email"

                        />
                        <br/>
                        <Input
                        type="password"
                        placeholder="senha"
                        autoFocus
                        id="password"

                        />
                    </ContainerInput>
    
                    <ContainerButton>
                       
                        <Link href="/homepage"><Button onClick={this.Login}>Sign In</Button></Link>
                        <br/>
                        
                            <ContainerConta>
                                <p>Não tem conta?</p> <span><button onClick={this.signUp}> <Link href="/"><a>Sign Up</a></Link></button></span>
                
                            </ContainerConta>
                    </ContainerButton>
                    </ContainerTransparent>

                </ContainerLogin>
            </div>
        )
    }
    
}

export default Login;

const ColorTitle = "#ff0";
const ColorBorderBtn = "#000";
const ColorBorderInput = "#000";
const HoverBgButton = "#ff0";

const BgContainerTransparent = "rgba(255,255,255, .2)";
const ColorShadowContainerTransparent = "rgba(0,0,0,.25)";
const ColorLinkContainerConta = "#000";


export const ContainerLogin = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('https://s2.glbimg.com/m2TeQfdw9cHfI67HYjvAPwb_j0E=/0x0:2048x1024/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/M/p/rBTBorSk2mrCGbHjqVMw/background-fortnite.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
`

export const ContainerTransparent = styled.div`
    background: ${BgContainerTransparent};
    box-shadow: 0 5px 15px ${ColorShadowContainerTransparent};
    width: 300px;
    height: 200px;
    padding-top: 30px;
    border-radius: 15px;
`

export const ContainerTitle = styled.div``

export const Title = styled.h2`
    color: ${ColorTitle};
    text-align: center;
`
export const ContainerInput = styled.div`
    text-align: center;
`

export const Input = styled.input`
    border: 1px solid ${ColorBorderInput};
    margin-bottom: 5px;
    width: 180px;
`
export const ContainerButton = styled.div`
    text-align: center;

    
`

export const Button = styled.button`
    cursor: pointer;
    border-radius: 15px solid ${ColorBorderBtn};
    width: 180px;

    &:hover{
        background-color: ${HoverBgButton};
        transition: all ease .3s;
    }
`

export const ContainerConta = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;

    p{
        margin-right: 5px;
        cursor: pointer;
    }
    
    p:hover{
        text-decoration: underline;
    }
    span{
        cursor: pointer;
    }


    button{
        background: none;
        border: 0;
    }

    a{  
        text-decoration: none;
        color: ${ColorLinkContainerConta};
        font-size: 12pt;
    }

    a:hover{
        text-decoration: underline;
    }

`