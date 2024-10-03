import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function TableDataCard () {

    const orders=[
        {
          "id": 1,
          "customerName": "John Doe",
          "orderDate": "2022-01-01",
          "total": 100.00,
          "status": "Pending"
        },
        {
          "id": 2,
          "customerName": "Jane Doe",
          "orderDate": "2022-01-15",
          "total": 200.00,
          "status": "Shipped"
        },
        
      ]
    return (
    <TableContainer component={Paper}>
      <Table aria-label="orders table" >
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell>Order Date</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.customerName}</TableCell>
              <TableCell>{order.orderDate}</TableCell>
              <TableCell>${order.total}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>
                <Button aria-label="view">
                  <VisibilityIcon color="primary"/>
                </Button>
                <Button aria-label="edit">
                  <EditIcon color="success"/>
                </Button>
                <Button aria-label="delete" >
                  <DeleteIcon color="error" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableDataCard;