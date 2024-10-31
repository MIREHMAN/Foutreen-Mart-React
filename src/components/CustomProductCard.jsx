import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

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
            justifyContent: "space-around",
            alignItems: "center",
            height: {xs:'80px',md:'90px'},
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
            <Rating name="read-only" value={value} readOnly precision={0.5} sx={{fontSize:'medium', letterSpacing:2}} />
            <Stack direction="row" spacing={2}>
              <Typography sx={{ fontWeight: {xs: 500, md:800}, color: "blue" }}>
                RS. {price}
              </Typography>
              
            </Stack>
          </Box>
        </Paper>
      </Button>
    );
  };