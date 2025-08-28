import React from 'react';
import Layout from './components/common/Layout';
import { Box, Typography } from '@mui/material';

const App: React.FC = () => {
  return (
    <Layout>
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" component="h1">
          ¡Bienvenido al Dashboard!
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Este es el espacio para tus componentes.
        </Typography>
        {/* Aquí es donde los demás insertarán sus componentes */}
      </Box>
    </Layout>
  );
};

export default App;