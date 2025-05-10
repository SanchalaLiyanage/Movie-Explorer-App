import React from 'react';
import { Typography } from '@mui/material';

const GridTest: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
      <div style={{ width: '200px', textAlign: 'center' }}>
        <Typography>Test Item 1</Typography>
      </div>
      <div style={{ width: '200px', textAlign: 'center' }}>
        <Typography>Test Item 2</Typography>
      </div>
    </div>
  );
};

export default GridTest;
