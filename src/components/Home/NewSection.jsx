import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import NewsSlider from "./Parts/NewsSlider";
import Button from "../utils/Button";

const NewSection = () => {
  return (
    <Stack py={5} sx={{ backgroundColor: "white" }}>
      <Stack direction={"row"} justifyContent={"space-evenly"}>
        <Stack width={"50%"} height={"250px"}>
          <Stack gap={"10px"} paddingLeft={"5px"}>
            <Typography variant="h3" fontWeight={"bold"}>
              Get Our Latest Charity News Update
            </Typography>
            <Box
              sx={{
                content: "''",
                width: "70px",
                height: "3.5px",
                backgroundColor: "#ffcd00",
              }}
            ></Box>
          </Stack>
        </Stack>

        <Box display={"flex"} justifyContent={"right"} width={"40%"}>
          <Button>GET MORE</Button>
        </Box>
      </Stack>
      <Stack direction={"row"} gap={4.5} justifyContent={"center"}>
        <NewsSlider />
      </Stack>
    </Stack>
  );
};

export default NewSection;
