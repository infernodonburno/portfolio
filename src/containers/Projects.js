import React from 'react'
import styled from 'styled-components'
import ProjectBubbles from '../components/ProjectBubbles'

import NavBar from '../components/NavBar'


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50vh;
`
const StyledAbout = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  `

const Projects = props => {
  return (
    <React.Fragment>
      <NavBar />
      <Container>
      
      </Container>
    </React.Fragment>
  )
}

export default Projects