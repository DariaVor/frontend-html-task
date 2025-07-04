import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const NavItem = styled.div`
  ${(props) =>
    props.isActive &&
    `
        background-color: ${props.theme.sidebarActive} ;
        color: ${props.theme.textActive};
    `}
  cursor: pointer;
  white-space: nowrap;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 20px;

  &:hover {
    background-color: ${(props) => props.theme.sidebarHover};
    color: ${(props) => props.theme.textHover};
  }

  transition: background-color 0.4s ease, color 0.4s ease;
`;

const NavTitle = styled.span`
  opacity: ${(props) => (props.isOpened ? 1 : 0)};
  visibility: ${(props) => (props.isOpened ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  white-space: nowrap;
`;

export const NavbarItem = ({ route, isOpened, goToRoute, isActive }) => {
  return (
    <NavItem onClick={() => goToRoute(route.path)} isActive={isActive}>
      <FontAwesomeIcon icon={route.icon} />
      <NavTitle isOpened={isOpened}>{route.title}</NavTitle>
    </NavItem>
  );
};

NavbarItem.propTypes = {
  route: PropTypes.object.isRequired,
  isOpened: PropTypes.bool.isRequired,
  goToRoute: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
