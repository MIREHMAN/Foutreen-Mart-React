import React from "react";
import Table from "@material-table/core";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function TableDataCard() {
  const data_col = [
    { field: "id", title: "Id" },
    { field: "customerName", title: "Customer Name" },
    {field: "orderDate", title: "Order Date" },
    { field: "total", title: "Order Amount" },
    {field: "status", title: "Order Status" },
    
  ];

  const orders = [
    {
      id: 1,
      customerName: "John Doe",
      orderDate: "2022-01-01",
      total: 100.0,
      status: "Pending",
      
       
    },
    {
      id: 2,
      customerName: "Jane Doe",
      orderDate: "2022-01-15",
      total: 200.0,
      status: "Shipped",
    },
    {
      id: 3,
      customerName: "Jane Doe",
      orderDate: "2022-01-15",
      total: 200.0,
      status: "Shipped",
    },
    {
      id: 4,
      customerName: "Jane Doe",
      orderDate: "2022-01-15",
      total: 200.0,
      status: "Shipped",
    },
    {
      id: 5,
      customerName: "Jane Doe",
      orderDate: "2022-01-15",
      total: 200.0,
      status: "Shipped",
    },
    {
      id: 6,
      customerName: "Jane Doe",
      orderDate: "2022-01-15",
      total: 200.0,
      status: "Shipped",
    },
  ];
  return (
    
      <Table title="All Users" data={orders} columns={data_col} actions={[
        {
          icon: () => <VisibilityIcon />,
          tooltip: "View Order",
          onClick: () => {
          alert(`View User : `);
          },
        },
        {
          icon: () => <EditIcon />,
          tooltip: "Edit User",
          onClick: () => {
          alert(`Edit User : `);
          },
        },
        {
          icon: () => <DeleteIcon />,
          tooltip: "Delete User",
          onClick: () => {
          alert(`Delete User : `);
          },
        },
      ]}/>
        
            
          
      
    
  );
}

export default TableDataCard;
