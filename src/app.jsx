import React from 'react'
import styled from 'styled-components'
import Chart from './Chart'
import sciDog from './media/sci_dog.png'
import Footer from './Footer'
const app = () => {
  return (
    <AppContainer>
      <TitleContainer>
        <h1>Ciencia de Datos Con Peludos</h1>
        <img src={sciDog}/>
        <h2>Descubramos que nos dicen los datos sobre nuestros mejores amigos</h2>
        </TitleContainer>
      <ChartsContainer>
      <Chart title='Top 10 perros mas populares' link='//datawrapper.dwcdn.net/eyaXM/1/'/>
      <Chart title='Top 10 perros más caros de mantener' link='//datawrapper.dwcdn.net/yKoRF/1/'/>
      <Chart title='Correlación entre peso y Longevidad ' link='//datawrapper.dwcdn.net/QSEh3/1/' />
      <Chart title='Número de razas entre un promedio de vida' link='//datawrapper.dwcdn.net/vvogG/1/'/>
      <Chart title='Proporción Promedio De Gastos en Perros' link='//datawrapper.dwcdn.net/CLh92/1/'/>
      <Chart title='Correlación De Tamaño Con Posibles Enfermedades Genéticas' link='//datawrapper.dwcdn.net/Lw6EQ/2/'/>
      <Chart title='Distribución de razas por entrenabilidad y tamaño' link='//datawrapper.dwcdn.net/4jzbi/1/'/>
      <Chart title='Correlación entre peso y compatibilidad con niños' link='//datawrapper.dwcdn.net/4h6om/1/'/>
      </ChartsContainer>
      <GradioContainer>
        <gradio-app src="https://johiny-dog-emotions.hf.space"></gradio-app>
      </GradioContainer>
      <Footer/>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #FFFFFF;
  justify-items: center;
  background-image: url('./src/media/Polygon_Luminary.svg') ;
  background-repeat: no-repeat;
  background-attachment: fixed;
`
const ChartsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`
const TitleContainer = styled.div`
  text-align: center;
  color: #faf7f5;
  h1{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: 700;
  font-size: 5vh;
  }
  h2{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 600;
    font-size: 3vh;
  }
  > img{
    position: absolute;
    width: 5vw;
    top: 1%;
    left: 69%;
  }
`
const GradioContainer = styled.div`
  margin-left: 5vw;
  margin-right: 5vw;
  padding: 1vh solid #4B5563;
  border-radius: 2%;
  background-color: #4B5563;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  margin-bottom: 1vh;
`
export default app
