import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { card } from "../dummydata";
import Progressbar from "./Progressbar";

const Hovercard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <>
      {card.map((val, index) => (
        <Box
          key={val.id}
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
          <Box
            sx={{
              position: "relative",
              width: "300px",
              height: "200px",
            }}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(-1)}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "300px",
                height: "200px",
                backgroundColor:
                  hoveredIndex === index
                    ? "rgba(255, 205, 0, 0.7)"
                    : "transparent",
                transition: "background-color 0.5s ease-out",
                backgroundSize:
                  hoveredIndex === index ? "contain" : "cover",
                cursor: "pointer",
                backgroundPosition: "center",
                borderRadius: "10px 10px 0 0",
                zIndex: 2,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                top: "calc(50% - 25px)",
                left: "calc(50% - 25px)",
                width: "50px",
                height: "50px",
                backgroundSize:
                  hoveredIndex === index ? "30px 30px" : "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                zIndex: 3,
                backgroundImage:
                  hoveredIndex === index ? `url(${val.png})` : "block",
                backgroundColor:
                  hoveredIndex === index ? "#ffffff" : "transparent",
                cursor: "pointer",
                borderRadius: "50%",
              }}
            />
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"200px"}
              width={"300px"}
            >
              <img
                src={val.cover}
                alt="First Image"
                width={"300px"}
                height={"200px"}
                style={{
                  position: "relative",
                  zIndex: 0,
                  borderRadius: "10px 10px 0 0",
                }}
              />
            </Box>
            <Stack width="300px" justifyContent="center" alignItems="center">
              <Box
                width="230px"
                textAlign="center"
                paddingTop="20px"
                display="flex"
                flexDirection="column"
                rowGap="19px" 
              >
                <Progressbar raised={val.Raised} goals={val.Goals}/>
                <Typography variant="h7">${val.Raised} Raised / ${val.Goals} Goals</Typography>
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
      ))}
    </>
  );
};

export default Hovercard;
