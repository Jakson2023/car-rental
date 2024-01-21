import styled from "styled-components";
import { NavLink } from 'react-router-dom';
export const WrapperHeader = styled.div`
width: 100vw;
height: 50px;
padding: 20px 0;
position: fixed;
top: 0;
z-index: 5;
background-color: #00BFFF;
    border-bottom: 2px solid lightblue;
display: flex;
`
export const BlockNav = styled.div`
display: flex;
   gap: 40px;
    
`
export const Container = styled.div`
width: 1000px;
 display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    
`

export const StyledLink = styled(NavLink)`
  color: #3470FF;
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  font-size: 20px;
  
  &.active {
    color: #9400D3;
  }
  
    
  
`;