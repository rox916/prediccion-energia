import React, { type ReactNode } from 'react';
import Header from '../dashboard/Header';
import Sidebar from '../dashboard/Sidebar';
import { Box } from '@mui/material';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Header />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;