import React from 'react';
import Layout from './pages/dashboard/Layout';
import { Box, Typography } from '@mui/material';

import NLQuestion from "./components/NLQuestion";
import PredictionForm from "./components/PredictionForm";
import PredictionChart from "./components/PredictionChart";
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
        <Box sx={{ mt: 4 }}>
          <NLQuestion />
        </Box>

        <Box sx={{ mt: 4 }}>
          <PredictionForm />
        </Box>

        <Box sx={{ mt: 4 }}>
          <PredictionChart />
        </Box>
      </Box>
    </Layout>
  );
};

export default App;