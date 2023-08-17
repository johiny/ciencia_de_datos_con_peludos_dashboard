import React from 'react'
import DWChart from 'react-datawrapper-chart'
import styled, { keyframes } from 'styled-components'
const Chart = ({ title, link, width }) => {
  return (
    <ChartContainer width={width}>
        <DWChart title={title} src={link}/>
    </ChartContainer>
  )
}

export default Chart

const ChartContainer = styled.div`
  position: relative;
  width: ${props => props.width};
  margin: 10vh;
  display: flex;
  align-items: center;
  border: 1vh solid #121212;
  padding: 5px;
  background-color: #121212;
  border-radius: 2%;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  transition: all 0.5s ease-in-out;
  transform: scale(1.04);
  :hover{
    transform: scale(1);
  }
  @media (max-width: 768px) {
  grid-template-columns: 1fr;
  margin: 2vh;
}
`
