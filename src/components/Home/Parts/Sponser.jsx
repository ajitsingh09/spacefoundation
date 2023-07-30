import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import { logos } from "../../../dummydata";

const Sponser = () => {
  return (
    <Stack sx={{ backgroundColor: "white" }}>
      <Box display={"flex"} flexDirection={"column"}>
        <Stack textAlign="center" justifyContent="end" height="100px">
          <Typography variant="h4" fontWeight="bold">
            {" "}
            OUR PARTNERS
          </Typography>
        </Stack>
        <Stack
          justifyContent="center"
          alignItems="center"
          height="100px"
          direction="row"
          gap="15px"
        >
          <Typography
            sx={{
              content: "''",
              width: "70px",
              height: "3px",
              backgroundColor: "#ffcd00",
            }}
          ></Typography>
          <CheckBoxOutlinedIcon sx={{ color: "#ffcd00" }} />
        </Stack>
      </Box>
      <Stack direction={"row"} gap={2} flexWrap={"wrap"}>
        {logos.map((val) => (
          <Box width={"110px"} height={"70px"} key={val.id}>
            <img src={val.img} alt="" />
          </Box>
        ))}
        <Box width={"190px"} flexGrow={1} />
        <Box width={"190px"} flexGrow={1} />
      </Stack>
    </Stack>
  );
};

export default Sponser;
