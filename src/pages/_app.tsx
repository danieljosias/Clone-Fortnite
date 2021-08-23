import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
    overflow-x: hidden;
  }

  //barra de rolagem

  /* personalizar a barra em geral, aqui estou definindo 10px de largura para a barra vertical
  e 10px de altura para a barra horizontal */
    ::-webkit-scrollbar {
    width:20px;
    height: 10px;
    }
     
    /* aqui é para personalizar o fundo da barra, neste caso estou colocando um fundo cinza escuro*/
    ::-webkit-scrollbar-track {
    background:#333;
    }
     
    /* aqui é a alça da barra, que demonstra a altura que você está na página
    estou colocando uma cor azul clara nela*/
    ::-webkit-scrollbar-thumb {
    background:#FF0;
    }

`

export const theme = {
  colors: {
    primary: '',
  },
}

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Clone-Fortnite</title>

        {/* Import CSS for nprogress */}
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />

      </Head>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )

}