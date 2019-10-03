import React from 'react'
import styled from 'styled-components'
import NavItem from './NavItem'

const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
`

const NavBar = props => {
  return (
    <StyledNavBar>
      <div>
        <NavItem to='/' exact>
          CHP
        </NavItem>
      </div>
      <div>
        <NavItem to='/about'>About</NavItem>
        <NavItem to='/todo'>Projects</NavItem>
      </div>
    </StyledNavBar>
  )
}

export default NavBar