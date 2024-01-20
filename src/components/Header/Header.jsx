import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, WrapperHeader } from './Header.styled'

const Header = () => {
  return (
    <WrapperHeader>
        <Container>
        <NavLink to='/'>Main</NavLink>
      <NavLink to='/catalog'>Catalog</NavLink>
      <NavLink to='/favorites'>Favorites</NavLink>
      </Container>
    </WrapperHeader>
  )
}

export default Header
