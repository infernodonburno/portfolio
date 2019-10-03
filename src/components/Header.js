import styled from 'styled-components'

const Header = styled.h1`
  text-align: center;
  font-size: 30pt;
  font-family: 'OCR A Std, monospace';
  text-color: white;
  .blinking{
    animation:blinkingText 2.5s infinite;
    color: #fff;
text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0080, 0 0 30px #ff0080, 0 0 40px #ff0080, 0 0 55px #ff0080, 0 0 75px #ff0080;
text-align: center;
}
    
  }
  
  @keyframes blinkingText{
    0%{     color: #000;    }
    
    50%{    color: transparent; }
   
    100%{   color: #000;    }
  }
  
`

export default Header