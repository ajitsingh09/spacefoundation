import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import spread from "../../assets/spread.png";
import SelectTextFields from "./Parts/SelectTextFields";
import Button from "../utils/Button";
const ExploreSection = () => {
  return (
    <Stack p={1} pt={5} sx={{ backgroundColor: "white" }}>
      <Typography
        variant="h3"
        fontWeight={"bold"}
        mb={3}
        ml={4}
        sx={{ width: "70%" }}
      >
        Our mission is to make them feel safe, explore the Space Foundation
        Charity{" "}
      </Typography>
      <Box
        mb={4}
        ml={4}
        sx={{
          content: "''",
          width: "120px",
          height: "3.5px",
          backgroundColor: "#ffcd00",
        }}
      />

      <Stack direction={"row"} mt={4} gap={4}>
        <Box sx={{ width: "50%" }}>
          <img src={spread} alt="" style={{ width: "90%", height: "90%" }} />
        </Box>
        <Box sx={{ width: "50%" }}>
          <SelectTextFields />
        </Box>
      </Stack>
    </Stack>
  );
};

export default ExploreSection;
