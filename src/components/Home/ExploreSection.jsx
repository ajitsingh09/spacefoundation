import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import spread from "../../assets/spread.png";
import SelectTextFields from "./Parts/SelectTextFields";
import Button from "../utils/Button";
const ExploreSection = () => {
  return (
    <Stack p={1} pt={5} sx={{ backgroundColor: "white" }}>
      <Typography
        fontWeight={"bold"}
        mb={3}
        ml={4}
        fontSize={{ xs: "h4.fontSize", md: "h3.fontSize" }}
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

      <Stack
        direction={{ xs: "column", md: "row" }}
        mt={4}
        gap={4}
        pb={4}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box sx={{ width: { xs: "80%", md: "50%" } }}>
          <img src={spread} alt="" style={{ width: "90%", height: "90%" }} />
        </Box>
        <Box sx={{ width: { xs: "80%", md: "50%" } }}>
          <SelectTextFields />
        </Box>
      </Stack>
    </Stack>
  );
};

export default ExploreSection;
