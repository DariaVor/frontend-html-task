import { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { ThemeToggle } from './components/ThemeToggle';
import { Sidebar } from './components/Sidebar';

library.add(fas);

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className='flex'>
        <Sidebar />
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
    </ThemeProvider>
  );
};

export default App;
