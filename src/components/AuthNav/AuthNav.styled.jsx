import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import IconPawprint from 'images/icons/IconPawprint';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  min-width: 142px;
  padding: 8px 20px;

  background: ${({ dark, theme }) =>
    dark === 'true' ? theme.color.primary : 'transparent'};
  color: ${({ dark, theme }) =>
    dark === 'true' ? theme.color.background : theme.color.primary};
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: 25px;

  text-decoration: none;
  text-align: center;

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.64px;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  @media screen and (min-width: 768px) {
    // width: 768px;
  }

  @media screen and (min-width: 1280px) {
    // width: 1280px;
  }
`;

export const AuthNavContainer = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  // grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
`;

export const StyledIconPawprint = (
  <IconPawprint
    fill={prop => {
      console.log('prop', prop);
    }}
  />
);