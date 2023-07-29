import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { work } from "../../../dummydata";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

const Newbox = () => {
  return (
    <>
      <Stack
        sx={{
          backgroundColor: "white",
        }}
      >
        <Stack textAlign="center">
          <Typography variant="h4" fontWeight="bold">
            {" "}
            THEMES OF IMPACT
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

        <Stack
          height={"100vh"}
          padding={"10px"}
          direction={"row"}
          gap={"20px"}
          p={"5% 0 5% 0"}
          justifyContent={"center"}
          margin={"auto"}
          flexWrap={"wrap"}
        >
          {work.map((val) => (
            <Box
              className="parent"
              key={val.id}
              sx={{
                position: "relative",
                width: "250px",
                height: "250px",
                overflow: "hidden",
                backgroundSize: "cover",
                backgroundImage: `url(${val.cover})`,
              }}
            >
              <Stack
                className="child"
                justifyContent={"flex-start"}
                alignItems={"flex-end"}
                sx={{
                  position: "absolute",
                  backgroundColor: val.color,
                  width: "250px",
                  opacity: "0.8",
                  height: "250px",
                  zIndex: "1",
                  bottom: "-35%",
                  left: "-35%",
                  transform: "scale(0.3)",
                  transition: "all 0.5s ease-in-out",
                }}
              ></Stack>
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                className="child2"
                sx={{
                  position: "absolute",
                  width: "75px",
                  height: "75px",
                  zIndex: "1",
                  bottom: "0",
                  left: "0",
                  transition: "all 0.5s ease-in-out",
                }}
              >
                <img
                  src={val.img}
                  alt=""
                  style={{
                    width: "60px",
                    height: "60px",
                  }}
                />
              </Stack>
              <Stack
                className="child1"
                justifyContent={"flex-start"}
                alignItems={"flex-end"}
                sx={{
                  position: "absolute",
                  backgroundColor: "black",
                  width: "580px",
                  opacity: "0.6",
                  height: "120px",
                  zIndex: "1",
                  top: "69%",
                  left: "-51%",
                  transform: "scale(0.3)",
                  transition: "all 0.5s ease-in-out",
                }}
              ></Stack>
              <Stack
                className="child3"
                justifyContent={"flex-start"}
                alignItems={"flex-end"}
                sx={{
                  position: "absolute",
                  width: "580px",
                  height: "120px",
                  zIndex: "1",
                  top: "69%",
                  left: "-65%",
                  transform: "scale(0.3)",
                  transition: "all 0.5s ease-in-out",
                }}
              >
                <Typography fontSize={"70px"} color={"white"}>
                  {val.title}
                </Typography>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default Newbox;
