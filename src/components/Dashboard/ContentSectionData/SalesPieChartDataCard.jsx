import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  
  ResponsiveContainer,
} from 'recharts';

export default function SalesPieChartDataCard () {
  return (
    <Card>
    <CardContent>
    <Typography variant="h5" component="div">
      Gender Based Sales
    </Typography>
    <Box mt={3}>
      <ResponsiveContainer width="100%" height={300}>
      <PieChart
  series={[
    {
      data: [
        { id: 0, value: 123, label: 'Male' },
        { id: 1, value: 151, label: 'Female' },     ],
    },
  ]}
  width={400}
  height={200}
/>
        
      </ResponsiveContainer>
    </Box>
  </CardContent>
</Card>
    
  );
}