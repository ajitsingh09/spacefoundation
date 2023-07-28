import React from "react";
import { Stack, Typography, Box, Button } from "@mui/material";
import spread from "../../assets/spread.png";
import SelectTextFields from "./Parts/SelectTextFields";

const ExploreSection = () => {
  return (
    <Stack direction={"column"} paddingTop={"5%"} sx={{backgroundColor:"white"}}>
      <Stack width={"70%"} height={"170px"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          padding={"10px 0 0 50px"}
        >
          <Typography variant="h3" fontWeight={"bold"}>
            Our mission is to make them feel safe, explore the Space Foundation
            Charity{" "}
          </Typography>
          <Box
            sx={{
              content: "''",
              width: "70px",
              height: "3.5px",
              backgroundColor: "#ffcd00",
            }}
          ></Box>
        </Box>
      </Stack>
      <Stack direction={"row"} gap={"60px"}>
        <Box padding={"0 0 0 50px"}>
          <img src={spread} alt="" />
        </Box>
        <Box paddingTop={"25px"}>
          <Typography variant="h4" fontWeight={"bold"} pb={4}>
            We are experts in Space Foundation services and solutions
          </Typography>

          <SelectTextFields />
          <Stack alignItems="left" paddingTop="20px">
            <Button
              variant="contained"
              sx={{
                width: "30%",
                color: "black",
                backgroundColor: "#ffcd00",
                "&:hover": { backgroundColor: "white" },
                fontWeight: "bold",
              }}
            >
              DONATION
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ExploreSection;
