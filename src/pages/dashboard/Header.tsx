import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Switch, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useThemeContext } from '../../contexts/ThemeContext';

const Header: React.FC = () => {
  const { toggleTheme, mode } = useThemeContext();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Dashboard de Energía
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1">
            Modo {mode === 'light' ? 'Claro' : 'Oscuro'}
          </Typography>
          <Switch checked={mode === 'dark'} onChange={toggleTheme} color="default" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;