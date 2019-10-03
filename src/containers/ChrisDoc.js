import React from 'react'

import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Image from '../components/Image'
import styled from 'styled-components'
import chrisDoc from '../Chris Resume-converted.pdf'


const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  
`
const formStyle = {
  display: 'flex',
  justifyContent: 'center',
  height: '50vh',
  position: 'none'
}

const ChrisDoc = props => {
  return (
    <React.Fragment>
      <NavBar />
        <Container>
          <form>
          <iframe src = {chrisDoc} width='700' height='450' allowfullscreen webkitallowfullscreen style = {formStyle} ></iframe>
          </form>
        </Container>
    </React.Fragment>
  )
}

export default ChrisDoc
