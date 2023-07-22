import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Hovercard from "./Parts/Hovercard";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

const CausesSection = () => {
  return (
    <Box width="100%">
      <Box>
        <Stack textAlign="center" justifyContent="end" height="150px">
          <Typography variant="h4" fontWeight="bold">
            {" "}
            LATEST CAUSES
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
        <Stack
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          height="70px"
        >
          <Typography variant="h6" width="700px" color="grey">
            The Justgiving charity provides enhanced services over and above
            what the NHS funds.
          </Typography>
        </Stack>
        <br></br>

        <Stack
          direction={"row"}
          gap="10px"
          flexWrap={"wrap"}
          justifyContent="center"
          alignItems="center"
          zIndex="1"
        >
          <Hovercard />
        </Stack>
      </Box>
    </Box>
  );
};

export default CausesSection;
