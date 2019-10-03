import React from 'react'

import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Image from '../components/Image'
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 150vh;
  
`
const Blinking = styled.h1`
.blinking{
  animation:blinkingText 2.0s infinite;
}
@keyframes blinkingText{
  0%{     color: #000;    }
 
  50%{    color: transparent; }
  
  100%{   color: #000;    }
}
`

const Home = props => {
  return (
    <React.Fragment>
      <NavBar />
        <Container>
          <Header>
            <Blinking className = "blinking">Chris Purnell</Blinking>
          </Header>
            <Image src= {require('../chrispurnell.jpg')}/>
        </Container>
    </React.Fragment>
  )
}

export default Home
