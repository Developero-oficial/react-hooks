import React from 'react';
import Typography from '@mui/material/Typography';

export const WelcomePage = () => (
  <>
    <Typography variant="h3" component="h1" gutterBottom color="primary">
      ¡Hola Mundo!
    </Typography>

    <Typography variant="h4" component="h2">
      Esta aplicación forma parte del curso{' '}
      <b>React Hooks: Manual Desde Cero con ejemplos de la vida real</b>
    </Typography>
  </>
);
