import { Box, Typography, Stack, Button } from "@mui/material";
import { donation } from "../../../dummydata";
import Progressbar2 from "./Linearprogress";
// import Linearprogress from "./Linearprogress";
// import Progressbar from "./Progressbar";
const Donatenow = () => {
  return (
    <>
      <Stack alignItems={"center"}>
        <Typography fontSize={"18px"} color={"grey"}>
          HELP EVERYONE
        </Typography>
        <Typography variant="h2">EACH DONATION IS AN ESSENTIAL HELP</Typography>
      </Stack>
      <Stack
        flexWrap={"wrap"}
        gap={5}
        pt={5}
        pb={5}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {donation.map((val, index) => (
          <Stack
            key={index}
            direction={"column"}
            width={"350px"}
            sx={{
              boxShadow: "0px -1px 11px -5px rgb(8, 8, 8)",
            }}
          >
            <Box height={"210px"} width="350px" sx={{ position: "relative" }}>
              <img
                src={val.img}
                style={{
                  width: "350px",
                  height: "180px",
                }}
                alt=""
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "5%",
                  right: "3%",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    color: "white",
                    backgroundColor: val.btncol,
                    borderRadius: "0%",
                    "&:hover": { backgroundColor: val.btncol },
                    fontWeight: "bold",
                  }}
                >
                  DONATE NOW
                </Button>
              </Box>
            </Box>
            <Box
              display={"flex"}
              gap={"20px"}
              flexDirection={"column"}
              p={4}
              letterSpacing={1}
            >
              <Typography variant="h4" fontWeight={"bold"}>
                {val.title}
              </Typography>
              <Typography fontSize={"15px"} color={"grey"}>
                {val.des}
              </Typography>
              <Box
                textAlign="center"
                display="flex"
                flexDirection="column"
                paddingTop={"10px"}
              >
                <Progressbar2
                  raised={val.Raised}
                  goals={val.Goals}
                  clr={val.btncol}
                />
              </Box>

              <Stack direction={"row"} justifyContent={"space-evenly"}>
                <Typography>Goal: {val.Goals} $</Typography>
                <Typography>Raised: {val.Raised} $</Typography>
              </Stack>
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    width: "50%",
                    color: "white",
                    backgroundColor: val.btncol,
                    borderRadius: "20px",
                    "&:hover": { backgroundColor: val.btncol },
                    fontWeight: "bold",
                  }}
                >
                  VIEW DETAILS
                </Button>
              </Box>
            </Box>
          </Stack>
        ))}
      </Stack>
    </>
  );
};

export default Donatenow;
