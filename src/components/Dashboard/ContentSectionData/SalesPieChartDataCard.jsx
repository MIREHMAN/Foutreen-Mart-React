// SalesPieChartDataCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {
  PieChart,
  Cell,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function SalesPieChartDataCard({ salesDataGenderBased }) {
  const colors = ['#8884d8', '#82ca9d']; // colors for male and female

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Gender-Based Sales
        </Typography>
        <Box mt={3}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
             
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}

export default SalesPieChartDataCard;