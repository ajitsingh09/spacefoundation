import { Box, Typography, Stack, Button } from "@mui/material";
import { donation } from "../../../dummydata";
import Progressbar2 from "./Linearprogress";
// import Linearprogress from "./Linearprogress";
// import Progressbar from "./Progressbar";
const Donatenow = () => {
  return (
    <Stack width={"90%"} flexWrap={"wrap"}  direction={"row"} gap={"12px"} rowGap={"30px"} alignItems={"center"}>
      {donation.map((val) => (
        <Stack
          direction={"column"}
          width={"350px"}
          height={"500px"}
          sx={{
            boxShadow: "-1px 2px 9px -2px rgb(8, 8, 8)",
            padding: "10px",
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
          <Box display={"flex"} gap={"10px"} flexDirection={"column"}>
            <Typography variant="h4" fontWeight={"bold"}>
              {val.title}
            </Typography>
            <Typography fontSize={"15px"}>{val.des}</Typography>
            <Box textAlign="center" display="flex" flexDirection="column" paddingTop={"10px"}>
              <Progressbar2 raised={val.Raised} goals={val.Goals} clr={val.btncol}/>

            </Box>
            
            <Stack direction={"row"} justifyContent={"space-evenly"}>
              <Typography>Goal: {val.Goals} $</Typography>
              <Typography>Raised: {val.Raised} $</Typography>
            </Stack>
            <Box>
            <Button
                variant="contained"
                sx={{
                  width: "36%",
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
  );
};

export default Donatenow;
