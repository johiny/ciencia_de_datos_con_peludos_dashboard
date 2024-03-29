import React from 'react'
import styled from 'styled-components'
import github from './media/GitHub_Logo_White.png'
const Footer = () => {
  return (
    <StyledFooter onClick={() => window.open('https://github.com/johiny/ciencia_de_datos_con_peludos', '_blank')}>
        <h6>Mira el repositorio completo en</h6>
        <img src={github}/>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
    background-color: #404258;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 20;
    h6{
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      font-weight: 700;
        color: whitesmoke;
        font-size: larger;
        margin: 0;
    }
    > img{
        position: relative;
        width: 5vw;
        margin: 0;
        top: 0vh;
    }
  padding-top: 10px;
  padding-bottom: 10px;
   margin-left: 20%;
   margin-right: 20%;
   border-top-left-radius: 20px;
   border-top-right-radius: 20px;
   :hover{
    background-color: #5a5c6e;
    cursor: pointer;
   }
   @media (max-width: 768px) {
    h6{
        font-size: medium;
    }> img{
        width: 20vw;
    }
    padding-top: 5px;
    padding-bottom: 5px;
    margin-left: 5%;
    margin-right: 5%;
}
`
export default Footer
