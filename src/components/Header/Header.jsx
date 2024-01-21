import React from 'react'

import {  BlockNav, Container, StyledLink, WrapperHeader } from './Header.styled'

const Header = () => {
  return (
    <WrapperHeader>
        <Container>
        <StyledLink to='/'>Home</StyledLink>
        <BlockNav>
      <StyledLink to='/catalog'>Catalog</StyledLink>
      <StyledLink to='/favorites'>Favorites</StyledLink>
      </BlockNav>

      </Container>
    </WrapperHeader>
  )
}

export default Header
