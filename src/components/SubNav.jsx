import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link, useNavigate } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";

const SubNav = () => {
  const navigate = useNavigate();
  const [popoverState, setPopoverState] = useState({});

  const handleMouseEnter = (linkId) => {
    setPopoverState((prevState) => ({
      ...prevState,
      [linkId]: true,
    }));
  };

  const handleMouseLeave = (linkId) => {
    setPopoverState((prevState) => ({
      ...prevState,
      [linkId]: false,
    }));
  };

  const isPopoverOpen = (linkId) => Boolean(popoverState[linkId]);
  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      alignSelf={"center"}
      spacing={6}
      m={"auto"}
      sx={{
        width: "90%",
        height: "12vh",
        bgcolor: "#ffcc00",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignContent="center"
        spacing={2}
        sx={{ color: "white", height: "100%", paddingRight: 10 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            backgroundColor: "green",
          }}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Link to="/our-work" className="navlink-link">
              <Box
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Typography alignSelf="center" display="inline-block">
                  Our Story
                </Typography>
                <KeyboardArrowDownIcon className="navlink-link-downarrow" />
              </Box>
            </Link>

            <Stack
              sx={{
                opacity: isPopoverOpen(1) ? 1 : 0,
                height: isPopoverOpen(1) ? "auto" : 0,
                padding: isPopoverOpen(1) ? 2 : 0,
                transition: "opacity 0.5s ease-in-out",
                position: "absolute",
                top: 20,
                overflow: "hidden",
                backgroundColor: "rgb(232, 232, 223,1)",
                zIndex: 1,
              }}
            >
              <Link to="#" sx={{ textDecoration: "none" }}>
                <Typography sx={{ p: 1 }}>Space Group</Typography>
              </Link>
              <Link to="/our-story/mission-vision">
                <Typography sx={{ p: 1 }}>Mission & Vission</Typography>
              </Link>
              <Link to="/our-story/awards-recognitions">
                <Typography sx={{ p: 1 }}>Awards & Recognitions</Typography>
              </Link>
            </Stack>
          </Box>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Link to="/our-story" className="navlink-link">
              <Box
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Typography alignSelf="center" display="inline-block">
                  Our Story
                </Typography>
                <KeyboardArrowDownIcon className="navlink-link-downarrow" />
              </Box>
            </Link>

            <Stack
              sx={{
                opacity: isPopoverOpen(2) ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
                position: "absolute",
                top: 50,
                color: "black",
                backgroundColor: "rgb(232, 232, 223,1)",
                height: isPopoverOpen(2) ? "auto" : 0,
                overflow: "hidden",
                padding: isPopoverOpen(2) ? 2 : 0,
                zIndex: 1,
                width: 200,
              }}
            >
              <Link to="#">
                <Typography sx={{ p: 1 }}>Events</Typography>
              </Link>
              <Link to="/our-work/world-space-week">
                <Typography sx={{ p: 1 }}>World Space Week</Typography>
              </Link>
              <Link to="/our-work/all-india-asteroid-search-campaign">
                <Typography sx={{ p: 1 }}>
                  All India Aestroid search campaign
                </Typography>
              </Link>
              <Link to="#">
                <Typography sx={{ p: 1 }}>Projects</Typography>
              </Link>
              <Link to="/our-work/sgvpk">
                <Typography sx={{ p: 1 }}>
                  SPACE Gram Vigran Prachar Kendra : SGVPK
                </Typography>
              </Link>
              <Link to="#">
                <Typography sx={{ p: 1 }}>SPACE CALENDER</Typography>
              </Link>
            </Stack>
          </Box>
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Link to="/our-impact" className="navlink-link">
              <Box
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Typography alignSelf="center" display="inline-block">
                  Our Story
                </Typography>
                <KeyboardArrowDownIcon className="navlink-link-downarrow" />
              </Box>
            </Link>

            <Stack
              sx={{
                opacity: isPopoverOpen(3) ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
                position: "absolute",
                top: 50,
                color: "black",
                backgroundColor: "rgb(232, 232, 223,1)",
                height: isPopoverOpen(3) ? "auto" : 0,
                overflow: "hidden",
                padding: isPopoverOpen(3) ? 2 : 0,
                zIndex: 1,
                width: 200,
              }}
            >
              <Link to="/our-impact/fighting-against-light-pollution">
                <Typography sx={{ p: 1 }}>
                  FIGHTING AGAINST LIGHT POLLUTION
                </Typography>
              </Link>
            </Stack>
          </Box>
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={() => handleMouseLeave(4)}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Link to="#" className="navlink-link">
              <Box
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Typography alignSelf="center" display="inline-block">
                  Our Story
                </Typography>
                <KeyboardArrowDownIcon className="navlink-link-downarrow" />
              </Box>
            </Link>

            <Stack
              sx={{
                opacity: isPopoverOpen(4) ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
                position: "absolute",
                top: 50,
                color: "black",
                backgroundColor: "rgb(232, 232, 223,1)",
                height: isPopoverOpen(4) ? "auto" : 0,
                overflow: "hidden",
                padding: isPopoverOpen(4) ? 2 : 0,
                zIndex: 1,
                width: 200,
              }}
            >
              <Link to="/donate">
                <Typography sx={{ p: 1 }}>DONATE NOW</Typography>
              </Link>
              <Link to="/volunteer">
                <Typography sx={{ p: 1 }}>VOLUNTEER US</Typography>
              </Link>
            </Stack>
          </Box>
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={() => handleMouseLeave(5)}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Link to="#" className="navlink-link">
              <Box
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Typography alignSelf="center" display="inline-block">
                  Our Story
                </Typography>
                <KeyboardArrowDownIcon className="navlink-link-downarrow" />
              </Box>
            </Link>

            <Stack
              sx={{
                opacity: isPopoverOpen(5) ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
                position: "absolute",
                top: 50,
                color: "black",
                backgroundColor: "rgb(232, 232, 223,1)",
                height: isPopoverOpen(5) ? "auto" : 0,
                overflow: "hidden",
                padding: isPopoverOpen(5) ? 2 : 0,
                zIndex: 1,
                width: 200,
              }}
            >
              <Link to="/space-in-news">
                <Typography sx={{ p: 1 }}>SPACE IN NEWS</Typography>
              </Link>
            </Stack>
          </Box>
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          onMouseEnter={() => handleMouseEnter(6)}
          onMouseLeave={() => handleMouseLeave(6)}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Link to="/contact-us" className="navlink-link">
              <Box
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Typography alignSelf="center" display="inline-block">
                  Our Story
                </Typography>
                <KeyboardArrowDownIcon className="navlink-link-downarrow" />
              </Box>
            </Link>

            <Stack
              sx={{
                opacity: isPopoverOpen(6) ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
                position: "absolute",
                top: 50,
                color: "black",
                backgroundColor: "rgb(232, 232, 223,1)",
                height: isPopoverOpen(6) ? "auto" : 0,
                overflow: "hidden",
                padding: isPopoverOpen(6) ? 2 : 0,
                zIndex: 1,
                width: 200,
              }}
            >
              <Link to="#">
                <Typography sx={{ p: 1 }}>CAREERS</Typography>
              </Link>
              <Link to="#">
                <Typography sx={{ p: 1 }}>GLOBAL</Typography>
              </Link>
            </Stack>
          </Box>
        </div>
      </Stack>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ width: 100, height: "100%", backgroundColor: "white" }}
      >
        <Box onClick={() => navigate("/donate")}>Donate Now</Box>
      </Box>
    </Stack>
  );
};

export default SubNav;
