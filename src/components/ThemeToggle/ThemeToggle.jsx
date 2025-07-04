import PropTypes from 'prop-types';
import styled from 'styled-components';

const ToggleWrapper = styled.div`
  margin: auto;
`;

const ToggleLabel = styled.label`
  cursor: pointer;
  display: inline-block;
`;

const ToggleInput = styled.input`
  display: none;

  &:checked + .slider {
    background-color: #fd7e14;
  }

  &:checked + .slider::before {
    transform: translateX(32px);
  }
`;

const ToggleSlider = styled.span`
  position: relative;
  display: inline-block;
  width: 64px;
  height: 32px;
  background-color: var(--color-text-light-hover);
  border-radius: 100px;
  transition: background 0.4s;

  &::before {
    content: '';
    position: absolute;
    width: 28px;
    height: 28px;
    left: 2px;
    top: 2px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s;
  }
`;

export const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <ToggleWrapper>
      <ToggleLabel>
        <ToggleInput
          type='checkbox'
          checked={theme === 'dark'}
          onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <ToggleSlider className='slider' />
      </ToggleLabel>
    </ToggleWrapper>
  );
};

ThemeToggle.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};
