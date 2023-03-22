import React from 'react'
import DWChart from 'react-datawrapper-chart'
import styled from 'styled-components'
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
  border-bottom: 1px solid white;
`
