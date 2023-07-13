import { Typography, Button } from "@mui/material";
import React from "react";

const SButton = ({ title }) => {
  return (
    <Button variant="contained">
      <Typography variant="h6">{title}</Typography>
    </Button>
  );
};

export default SButton;
