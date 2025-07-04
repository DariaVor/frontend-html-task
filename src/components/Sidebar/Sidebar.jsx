import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import { CollapseButton } from './components/CollapseButton';
import { NavbarItem } from './components/NavbarItem';

import styled from 'styled-components';

const routes = [
  { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
  { title: 'Sales', icon: 'chart-line', path: '/sales' },
  { title: 'Costs', icon: 'chart-column', path: '/costs' },
  { title: 'Payments', icon: 'wallet', path: '/payments' },
  { title: 'Finances', icon: 'chart-pie', path: '/finances' },
  { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
  { title: 'Settings', icon: 'sliders', path: '/settings' },
  { title: 'Support', icon: 'phone-volume', path: '/support' },
];

const Container = styled.div`
  background-color: ${(props) => props.theme.sidebarBg};
  color: ${(props) => props.theme.textDefault};
  width: ${(props) => (props.isOpened ? '260px' : '50px')};
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  transition: background-color 0.4s ease, color 0.4s ease, width 0.3s ease;
`;

const LogoWrapper = styled.div`
  color: ${(props) => props.theme.logoColor};
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px;

  transition: color 0.4s ease;
`;

const LogoImg = styled.img`
  width: 30px;
  height: 30px;
`;

const LogoTitle = styled.span`
  opacity: ${(props) => (props.isOpened ? 1 : 0)};
  visibility: ${(props) => (props.isOpened ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const NavbarWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const Sidebar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [activePath, setActivePath] = useState('/');

  const goToRoute = (path) => {
    setActivePath(path);
    console.log(`going to "${path}"`);
  };

  const toggleSidebar = () => {
    setIsOpened((v) => !v);
  };

  return (
    <Container isOpened={isOpened}>
      <LogoWrapper>
        <LogoImg src={logo} alt='TensorFlow logo' />
        <LogoTitle isOpened={isOpened}>TensorFlow</LogoTitle>
      </LogoWrapper>

      <CollapseButton isOpened={isOpened} onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
      </CollapseButton>

      <NavbarWrapper>
        <div>
          {routes.map((route) => (
            <NavbarItem
              key={route.title}
              goToRoute={goToRoute}
              isOpened={isOpened}
              route={route}
              isActive={route.path === activePath}
            />
          ))}
        </div>

        <div>
          {bottomRoutes.map((route) => (
            <NavbarItem
              key={route.title}
              goToRoute={goToRoute}
              isOpened={isOpened}
              route={route}
              isActive={route.path === activePath}
            />
          ))}
        </div>
      </NavbarWrapper>
    </Container>
  );
};
