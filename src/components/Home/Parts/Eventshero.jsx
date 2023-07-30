import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eventcard, cards } from "../../../dummydata";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Imageslide from "./upcomingEventslider";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Mapevent from "./Map";
import Button from "../../utils/Button";

const Eventhero = () => {
  const [isHovered, setIsHovered] = useState(-1);
  const handleHover = (index) => {
    setIsHovered(index);
  };
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        position={"relative"}
        alignItems={"center"}
      >
        <Box width={"80%"} height={"500px"}>
          <Mapevent />
        </Box>
        <Stack
          sx={{
            position: "absolute",
            height: 62,
            width: "81%",
            content: "''",
            backgroundColor: "WHITE",
          }}
        ></Stack>
      </Box>
      <Stack padding={"10% 0 5% 3%"} direction={"row"}>
        <Stack gap={"80px"} width={"70vw"}>
          {Eventcard.map((val, index) => (
            <Stack direction={"row"} key={index}>
              <Stack
                sx={{
                  height: "fit-content",
                  borderbottom: "1px solid #ffcc00",
                  borderRightWidth: 1,
                }}
              >
                <Box
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={() => handleHover(-1)}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "30vw",
                    backgroundImage: `url(${val?.cover})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{
                      width: "100%",
                      height: "100%",
                      backgroundColor:
                        isHovered === index
                          ? "rgba(255, 204, 0,0.8)"
                          : "transparent",

                      opacity: isHovered === index ? 1 : 0,
                      transition: "all 0.7s ease",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "50%",
                        width: "120px",
                        height: "120px",
                      }}
                    >
                      <img
                        className="fade-in-animation"
                        src={val?.png}
                        alt="img"
                        style={{ width: "80px", height: "80px" }}
                      />
                    </Box>
                  </Box>
                </Box>

                <Stack pt={3} gap={"70px"} rowGap={"30px"}>
                  <Box
                    display={"flex"}
                    flexDirection={"row"}
                    gap={"50px"}
                    sx={{
                      borderBottom: "1px solid grey",
                      borderBottomWidth: 1,
                      padding: "39px 0 39px 39px",
                    }}
                  >
                    <Box display={"flex"} flexDirection={"row"} gap={"50px"}>
                      <Box>
                        <Typography variant="h2" fontWeight={"bold"}>
                          {val.Date}
                        </Typography>
                        <Typography
                          mb={1}
                          sx={{
                            content: "''",
                            width: "65px",
                            height: "3px",

                            backgroundColor: "#ffcd00",
                          }}
                        ></Typography>
                        <Typography variant="body1" pb={1}>
                          {val.monthyear}
                        </Typography>{" "}
                      </Box>
                      <Box>
                        <Typography
                          mb={1}
                          sx={{
                            content: "''",
                            width: "3px",
                            height: "140px",

                            backgroundColor: "#bdbdbd",
                          }}
                        ></Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Box display={"flex"} flexDirection={"row"} gap={"20px"}>
                        <Box display={"flex"} flexDirection={"row"}>
                          <Typography variant="body1" sx={{ color: "grey" }}>
                            <CalendarMonthOutlinedIcon
                              sx={{ color: "#ffcc00", pr: 1 }}
                            />
                          </Typography>
                          <Typography>{val.time}</Typography>
                        </Box>
                        <Box display={"flex"} flexDirection={"row"}>
                          <Typography variant="body1" sx={{ color: "grey" }}>
                            <EmailOutlinedIcon
                              sx={{ color: "#ffcc00", pr: 1 }}
                            />
                          </Typography>
                          <Typography>{val.place}</Typography>
                        </Box>
                      </Box>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        gap={1}
                      >
                        <Typography
                          variant="h6"
                          fontWeight={"bold"}
                          sx={{
                            cursor: "pointer",
                            "&:hover": {
                              color: "#ffcc00",
                            },
                          }}
                        >
                          {val.title}
                        </Typography>
                        <Typography sx={{letterSpacing:1}} color={"grey"}>{val.des}</Typography>
                        <Box pt={2}>
                        <Button pt sx={{
                          width:"250px",
                          height:"45px",
                          fontSize:"19px",
                          bgcolor:"#ffcc00",
                          color:"black",
                          
                        }}>Know More</Button></Box>
                      </Box>
                    </Box>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>
        <Stack width={"40%"} pl={"30px"} gap={"20px"}>
          <Typography variant="h5" fontWeight={"bold"}>
            What is Space Foundation?
          </Typography>
          <Typography color={"grey"} pr={5}>
            Space Foundatiom is a new type of fundraising where you can raise
            funds for your own personal cause, even if you're not a registered
            charity.
          </Typography>
          <Box marginTop="10px">
            <Link to="/" className="mainNavLInks1">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "Center",
                  alignItems: "center",
                }}
              >
                <Typography fontWeight={"bold"}> Become a volunteer</Typography>
                <ArrowForwardIcon color="#ffcd00" className="main2" />
              </Box>
            </Link>
          </Box>
          <Stack gap={4} pt={2}>
            <Typography fontWeight={"bold"} variant="h5">
              Upcoming Event
            </Typography>
            <Typography
              sx={{
                content: "''",
                width: "90%",
                height: "2px",
                backgroundColor: "#ffcd00",
              }}
            ></Typography>
            <Imageslide />
          </Stack>
          <Stack gap={4} pt={2}>
            <Typography fontWeight={"bold"} variant="h5">
              Recent Posts
            </Typography>
            <Typography
              sx={{
                content: "''",
                width: "90%",
                height: "2px",
                backgroundColor: "#ffcd00",
              }}
            ></Typography>
            <Stack direction={"row"} gap={"15px"}>
              <Box>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="https://demoapus2.com/crowdngo/wp-content/uploads/2019/08/charity_14-150x150.jpg"
                  alt=""
                />
              </Box>
              <Stack>
                <Typography variant="h6" fontWeight={"bold"} sx={{
                  cursor:"pointer",
                  "&:hover": {
                    color: "#ffcc00",
                  },
                }}>
                  First child dies of Ebola in
                </Typography>
                <Typography color={"grey"}>August 12, 2019</Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} gap={"15px"}>
              <Box>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="https://demoapus2.com/crowdngo/wp-content/uploads/2019/08/charity_14-150x150.jpg"
                  alt=""
                />
              </Box>
              <Stack>
                <Typography variant="h6" fontWeight={"bold"} sx={{
                  cursor:"pointer",
                  "&:hover": {
                    color: "#ffcc00",
                  },}}>
                  First child dies of Ebola in
                </Typography>
                <Typography color={"grey"}>August 12, 2019</Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} gap={"15px"}>
              <Box>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="https://demoapus2.com/crowdngo/wp-content/uploads/2019/08/charity_14-150x150.jpg"
                  alt=""
                />
              </Box>
              <Stack>
                <Typography variant="h6" fontWeight={"bold"} sx={{
                  cursor:"pointer",
                  "&:hover": {
                    color: "#ffcc00",
                  },}}>
                  First child dies of Ebola in
                </Typography>
                <Typography color={"grey"}>August 12, 2019</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Eventhero;
