import React from "react";
import { Box, Stack, Typography } from "@mui/material";
// import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
// import MyComponent from "../components/Imagehover";
import Button from "../components/utils/Button";
import News from "../components/News";
import spread from "../assets/spread.png";
import SelectTextFields from "../components/Forms";

const OurWork = () => {
  return (
    <>
      <Box
        width="100%"
        height="1503px"
        paddingTop={"30%"}
        sx={{ backgroundColor: "white" }}
      >
        <Stack direction={"column"} pb={5}>
          <Stack direction={"row"} justifyContent={"space-evenly"}>
            <Stack width={"50%"} height={"250px"}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"10px"}
                paddingLeft={"5px"}
              >
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
              </Box>
            </Stack>
            <Box display={"flex"} justifyContent={"right"} width={"40%"}>
              <Button>
                <Typography color={"black"}>GET MORE</Typography>
              </Button>
            </Box>
          </Stack>
          <Stack
            direction={"row "}
            gap={"20px"}
            justifyContent={"space-evenly"}
          >
            <News />
          </Stack>
        </Stack>

        <Stack direction={"column"}>
          <Stack width={"70%"} height={"170px"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"10px"}
              padding={"10px 0 0 50px"}
            >
              <Typography variant="h3" fontWeight={"bold"}>
                Our mission is to make them feel safe, explore the Crowdhope
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
                We are experts in Crowdhope services and solutions
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
      </Box>
    </>
  );
};

export default OurWork;
