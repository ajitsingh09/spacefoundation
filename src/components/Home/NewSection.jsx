import React from "react";
import { Stack, Typography, Box, Button } from "@mui/material";
import NewsSlider from "./Parts/NewsSlider";
const NewSection = () => {
  return (
    <Stack py={5}>
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
          <Button>
            <Typography color={"black"}>GET MORE</Typography>
          </Button>
        </Box>
      </Stack>
      <Stack direction={"row "} gap={"15px"} justifyContent={"space-evenly"}>
        <NewsSlider />
      </Stack>
    </Stack>
  );
};

export default NewSection;
