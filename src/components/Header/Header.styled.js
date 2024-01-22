import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const WrapperHeader = styled.div`
  width: 100vw;
  height: 30px;
  padding: 20px 0;
  position: fixed;
  top: 0;
  z-index: 5;
  background-color: #00bfff;
  border-bottom: 2px solid lightblue;
  display: flex;
`;
export const BlockNav = styled.ul`
  display: flex;
`;
export const Container = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledLink = styled(NavLink)`
  color: #3470ff;
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  font-size: 20px;
  &.active {
    color: #9400d3;
  }
`;

export const StyledLi = styled.li`
  margin-right: 40px;
  width: 110px;
`;
