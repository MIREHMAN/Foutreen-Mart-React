import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function SalesChartDataCard({ salesData }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Sales Chart
        </Typography>
        <Box mt={3}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <Line type="monotone" dataKey="sales" stroke="#8884d8" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}

export default SalesChartDataCard;