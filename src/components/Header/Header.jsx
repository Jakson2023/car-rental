import React from 'react';
import {
  BlockNav,
  Container,
  StyledLi,
  StyledLink,
  WrapperHeader,
} from './Header.styled';
import { useSelector } from 'react-redux';

const Header = () => {
  const favorites = useSelector(state => state.adverts.favorites);

  return (
    <WrapperHeader>
      <Container>
        <StyledLink to="/">Home</StyledLink>
        <BlockNav>
          <li>
            <StyledLink to="/catalog">Catalog</StyledLink>
          </li>
          <StyledLi>
            {favorites.length > 0 && (
              <StyledLink to="/favorites">Favorites</StyledLink>
            )}
          </StyledLi>
        </BlockNav>
      </Container>
    </WrapperHeader>
  );
};

export default Header;
