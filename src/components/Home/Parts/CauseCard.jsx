import React from "react";
import { card } from "../dummydata";
import { Box, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
// import png from "../assets/unlink.png";
import MyComponent from "./Hovercard.jsx";

const Causecard = () => {
  return (
    <Stack width="100%">
      <Stack
        direction="row"
        gap="10px"
        height="500px"
        flexWrap={"wrap"}
        justifyContent="center"
        alignItems="center"
        zIndex="1"
        sx={{
          "&:hover": {
            backgroundColor: "white",
            // content:"''",
            // zIndex: "2",
            // backgroundImage: `url(${png})`,
            // backgroundRepeat:"no-repeat",
            // backgroundPosition:"center center"
          },
        }}
      >
        {card.map((val, index) => {
          return (
            <>
              <Box position={"relative"} key={index}>
                <Box
                  sx={{
                    height: "500px",
                    zIndex: "0",
                    border: "1px solid #dbdbd9",
                    borderRadius: "10px",
                    "&:hover": {
                      border: "1px solid #ffcd00",
                    },
                  }}
                >
                  <Stack
                    width="300px"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box
                      width="230px"
                      textAlign="center"
                      paddingTop="123px"
                      display="flex"
                      flexDirection="column"
                      rowGap="19px"
                    >
                      <Typography variant="h7">{val.goals}</Typography>
                      <Typography fontWeight="bold">{val.des}</Typography>
                    </Box>
                  </Stack>
                  <Stack alignItems="center" paddingTop="20px">
                    <Button
                      variant="contained"
                      sx={{
                        width: "48%",
                        color: "black",
                        backgroundColor: "#ffcd00",

                        "&:hover": { backgroundColor: "white" },
                        fontWeight: "bold",
                      }}
                    >
                      VIEW DETAILS
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Causecard;
