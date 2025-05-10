import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { ThemeContext } from '../theme/themeConfig';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Movie Explorer
        </Typography>
        <IconButton color="inherit" onClick={toggleTheme}>
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
