import React from 'react'
import styled from 'styled-components'

import Row from '../components/Row'
import Image from '../components/Image'
import TextBlock from '../components/TextBlock'
import NavBar from '../components/NavBar'
import TimelineStyle from '../components/Timeline'
import chrisLogo from '../chrispurnell.jpg'




const StyledAbout = styled.div`
  height: 50vh;
  width: 100vw;
  display: flex;
  align-items: center;
  `
  const Container = styled.div`
  justify-content: center;
  width: 100%;
  height: 90%;
  
`

const holder = {
    display: 'flex',
    justifyContent: 'space-around'
} 

const imageStyle = {
    borderRadius: '50%'
}

const About = props => {
    return (
        <React.Fragment>
      <NavBar />
      <StyledAbout>
          <Container>
            <TimelineStyle>
            <div class="timeline">
                <div class="container left">
                   <div class="content" style={holder}>
                        <h3>Born in Columbia, MD</h3>
                        <img src={chrisLogo} height='100px' width='100px' style= {imageStyle}/>
                    </div>
                </div>
                    <div class="container right">
                        <div class="content">
                            <h3>Interested in technology through father</h3>
                    </div>
                </div>
                <div class="container left">
                        <div class="content">
                            <h3>Became interested in music through videogames and parents</h3>
                    </div>
                </div>
                <div class="container right">
                        <div class="content">
                            <h3>Worked at Kroger through highschool and attending college at the University of Memphis</h3>
                    </div>
                </div>
                <div class="container left">
                        <div class="content">
                            <h3>Startup business</h3>
                    </div>
                </div>
                <div class="container right">
                        <div class="content">
                            <h3>Tech901 to Cook Systems</h3>
                    </div>
                </div>
            </div>
            </TimelineStyle>
          </Container>
        >
      </StyledAbout>
    </React.Fragment>
    )
}

export default About