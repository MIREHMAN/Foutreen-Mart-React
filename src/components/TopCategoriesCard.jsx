import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import WImage from "../assets/watch1.jpg";

import React from "react";

function TopCategoriesCard() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: 'red',
        display: "flex",
        borderRadius: "6px",
      }}
    >
      <Box sx={{ m: 5 }}>
        <Stack>
          <Typography
            variant="h6"
            sx={{ fontSize: "2rem", fontWeight: "800", color: "whitesmoke" }}
          >
            This is a Heading
          </Typography>
          <Typography
            sx={{ fontSize: "1.5rem", fontWeight: "700", color: "whitesmoke" }}
          >
            This is a Paragraph or Description
          </Typography>
        </Stack>
        <Button variant="contained" color="secondary">
          Shop Now
        </Button>
      </Box>
      <Box sx={{margin:'auto'}}>
        <img src={WImage} width={'200px'}/>
      </Box>
    </Box>
  );
}

export default TopCategoriesCard;
