import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

export default function CustomProductCard ({ rating, image, title, price, onClick })  {
    const [value, setValue] = useState(rating);

    return (
      <Button onClick={onClick}>
        <Paper
          sx={{
            display: "flex",
            m: 0,
            p: 0,
            width: {xs:250,md:300},
            flexDirection:'column',
            justifyContent: "space-around",
            alignItems: "center",
            height: 140,
            cursor: "pointer",
          }}
        >
          <Box>
            <img src={image} style={{ height: "70px" }} alt={title} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{ textAlign: "left", fontWeight: {xs: 600, md:700}, fontSize:'small', letterSpacing:2}}
            >
              {title}
            </Typography>
            
           
          </Box>
        </Paper>
      </Button>
    );
  };