import styled from 'styled-components';

export const CollapseButton = styled.div`
  cursor: pointer;
  background-color: ${(props) =>
    props.isOpened ? props.theme.buttonBgActive : props.theme.buttonBg};
  z-index: 100;
  position: absolute;
  right: ${(props) => (props.isOpened ? '-15px' : '-40px')};
  top: 10px;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 8px;
`;
