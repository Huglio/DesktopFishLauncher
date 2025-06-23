import { IoIosArrowForward } from 'react-icons/io';
import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  max-width: 32rem;
  padding: 1rem;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const BreadcrumbItem = styled.span`
  display: flex;
`;

export const NavLink = styled(RouterNavLink)`
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: ${props => props.theme.colors.text.yellow};
  }
`;

export const Arrow = styled(IoIosArrowForward)`
  margin: 0 0.2rem;
`;
