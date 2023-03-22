import React from 'react'
import styled from 'styled-components'
import Chart from './Chart'
import sciDog from './media/sci_dog.png'
import Footer from './Footer'

const app = () => {
  return (
    <AppContainer>
      <TitleContainer>
        Ciencia de Datos Con Peludos
        <img src={sciDog}/></TitleContainer>
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
  background-color: #121212;
  justify-items: center;
`
const ChartsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`
const TitleContainer = styled.h1`
  text-align: center;
  color: #faf7f5;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 5vh;
  > img{
    position: relative;
    width: 3vw;
    top: 1vh;
    margin-left: 1vw;
  }
`
const GradioContainer = styled.div`
  margin-left: 5vw;
  margin-right: 5vw;
`
export default app
