import React from 'react'
import styled from 'styled-components'
import ProjectBubbles from '../components/ProjectBubbles'
import ImgMediaCard from '../components/ProjectCard'
import ImgMediaCardDev from '../components/ProjectCardDev'
import ImgMediaCardSpring from '../components/ProjectCardSpring'
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
        <ImgMediaCard></ImgMediaCard>
        <ImgMediaCardSpring></ImgMediaCardSpring>
        <ImgMediaCardDev></ImgMediaCardDev>
      </Container>
    </React.Fragment>
  )
}

export default Projects