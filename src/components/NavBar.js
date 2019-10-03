import React from 'react'
import styled from 'styled-components'
import NavItem from './NavItem'

const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
`
const Cloud = styled.div`
#cloud-background {
	background-color: black ;
	z-index: 0;
	padding-top: 0px;
	padding-bottom: 5px;
	display: flex;
    justify-content: center;
}
#cloud {
	width: 250px; height: 100px;

	background: #f2f9fe;
	background: linear-gradient(top, #f2f9fe 5%, #d6f0fd 100%);
	background: -webkit-linear-gradient(top, #f2f9fe 5%, #d6f0fd 100%);
	background: -moz-linear-gradient(top, #f2f9fe 5%, #d6f0fd 100%);
	background: -ms-linear-gradient(top, #f2f9fe 5%, #d6f0fd 100%);
	background: -o-linear-gradient(top, #f2f9fe 5%, #d6f0fd 100%);

	border-radius: 100px;
	-webkit-border-radius: 100px;
	-moz-border-radius: 100px;

	position: relative;
	margin: 100px auto 30px;
	padding-left: 5px;
}

#cloud:after, #cloud:before {
	content: '';
	position: absolute;
	background: #f2f9fe;
	z-index: -1
}

#cloud:after {
	width: 75px; height: 75px;
	top: -37px; left: 37px;

	border-radius: 100px;
	-webkit-border-radius: 100px;
	-moz-border-radius: 100px;
}

#cloud:before {
	width: 135px; height: 135px;
	top: -67px; right: 37px;

	border-radius: 200px;
	-webkit-border-radius: 200px;
	-moz-border-radius: 200px;
}

.shadow {
	width: 262px;
	position: absolute; bottom: -10px;
	background: #000;
	z-index: -1;

	box-shadow: 0 0 25px 8px rgba(0, 0, 0, 0.4);
	-moz-box-shadow: 0 0 25px 8px rgba(0, 0, 0, 0.4);
	-webkit-box-shadow: 0 0 25px 8px rgba(0, 0, 0, 0.4);

	border-radius: 50%;
	-moz-border-radius: 50%;
	-webkit-border-radius: 50%;
}
`

const NavBar = props => {
  return (
    <StyledNavBar>
      <Cloud>
        <div id = "cloud">
        <div id="cloud-background">
          <NavItem to='/' exact>
            CHP
          </NavItem>
        </div>
        </div>
      </Cloud>
      <Cloud>
      <div id = "cloud">
        <div id="cloud-background">
        
          <NavItem to='/about'>About</NavItem>
        </div>
        </div>
      </Cloud>
      <Cloud>
      <div id = "cloud">
        <div id="cloud-background">
        
          <NavItem to='/projects'>Projects</NavItem>
        </div>
        </div>
        </Cloud>
    </StyledNavBar>
  )
}

export default NavBar