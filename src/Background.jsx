import React from 'react'
import { keyframes } from 'styled-components'
import styled from 'styled-components'
const Background = () => {
  return (
    <BackgroundWrapper>
<ul class="background">
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
</ul>
    </BackgroundWrapper>
  )
}

const animate = keyframes`
0%{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
}
100%{
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
}
`
const BackgroundWrapper = styled.div`
 position: fixed;
 width: 100vw;
 height: 100vh;
.background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    background: #121212;
    overflow: hidden;
}
.background li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: ${animate} 19s linear infinite;
}




.background li:nth-child(0) {
    left: 29%;
    width: 146px;
    height: 146px;
    bottom: -146px;
    animation-delay: 1s;
}
.background li:nth-child(1) {
    left: 88%;
    width: 102px;
    height: 102px;
    bottom: -102px;
    animation-delay: 5s;
}
.background li:nth-child(2) {
    left: 68%;
    width: 164px;
    height: 164px;
    bottom: -164px;
    animation-delay: 1s;
}
.background li:nth-child(3) {
    left: 21%;
    width: 174px;
    height: 174px;
    bottom: -174px;
    animation-delay: 10s;
}
.background li:nth-child(4) {
    left: 89%;
    width: 126px;
    height: 126px;
    bottom: -126px;
    animation-delay: 15s;
}
.background li:nth-child(5) {
    left: 31%;
    width: 103px;
    height: 103px;
    bottom: -103px;
    animation-delay: 16s;
}
.background li:nth-child(6) {
    left: 29%;
    width: 197px;
    height: 197px;
    bottom: -197px;
    animation-delay: 6s;
}
.background li:nth-child(7) {
    left: 42%;
    width: 140px;
    height: 140px;
    bottom: -140px;
    animation-delay: 27s;
}
.background li:nth-child(8) {
    left: 13%;
    width: 220px;
    height: 220px;
    bottom: -220px;
    animation-delay: 32s;
}
.background li:nth-child(9) {
    left: 81%;
    width: 124px;
    height: 124px;
    bottom: -124px;
    animation-delay: 19s;
}
`
export default Background