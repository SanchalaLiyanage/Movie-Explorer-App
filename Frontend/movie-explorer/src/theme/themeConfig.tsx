import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import React, { useMemo, useState, createContext } from 'react';

export const ThemeContext = createContext({ toggleTheme: () => {} });

const ThemeConfig: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#0000FF', // Blue
          },
          background: {
            default: mode === 'light' ? '#FFFFFF' : '#000000', // White for light, Black for dark
            paper: mode === 'light' ? '#F5F5F5' : '#121212',
          },
          text: {
            primary: mode === 'light' ? '#000000' : '#FFFFFF',
          },
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeConfig;
