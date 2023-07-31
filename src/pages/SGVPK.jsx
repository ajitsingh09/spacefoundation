import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  Divider,
} from "@mui/material";

const SGVPK = () => {
  const [registerData, setRegisterData] = useState({
    Title: "",
    Description: "",
  });

  const [registerDataList, setRegisterDataList] = useState([
    { Title: "1st event", Description: "1st description" },
    { Title: "2nd event", Description: "2nd description" },
    { Title: "3rd event", Description: "3rd description" },
  ]);
  useEffect(() => {
    const data = localStorage.getItem("registerData");
    console.log(data, "data");
    if (!data) return;
    const newData = JSON.parse(data);
    console.log(newData, "newData");
    setRegisterDataList(newData);
  }, []);
  const handleOnSubmit = (e) => {
    if (!registerData.Title || !registerData.Description)
      return alert("Please fill all the fields");
    e.preventDefault();
    console.log(registerData, "registerData");
    const data = localStorage.getItem("registerData");
    if (data) {
      const newData = JSON.parse(data);
      console.log(newData, "newData");
      const tempdata = [registerData, ...newData];
      setRegisterDataList(tempdata);
      localStorage.setItem("registerData", JSON.stringify(tempdata));
    } else {
      setRegisterDataList([registerData, ...registerDataList]);
      localStorage.setItem("registerData", JSON.stringify(registerDataList));
    }
    setRegisterData({ Title: "", Description: "" });
  };

  return (
    <div>
      <>
        <Box
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            width: "100%",
            height: "100vh",
            color: "white",
            backgroundColor: "black",
          }}
        >
          <Typography variant="h1">
            SPACE gyaan vigyan prachar kendra
          </Typography>
        </Box>
        <Stack
          sx={{ height: "100vh", bgcolor: "aliceblue " }}
          justifyContent={"center "}
          alignItems={"center"}
        >
          <Stack component={"form"}>
            <Typography variant="h3">register an event</Typography>
            <TextField
              required
              id="outlined-required"
              label="Event Title "
              value={registerData.Title}
              onChange={(e) =>
                setRegisterData({ ...registerData, Title: e.target.value })
              }
            />
            <TextField
              required
              id="outlined-required"
              label="Event Description"
              value={registerData.Description}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  Description: e.target.value,
                })
              }
            />
            <Button type="submit" variant="contained" onClick={handleOnSubmit}>
              Submit
            </Button>
          </Stack>
          <Stack pt={5}>
            <Typography variant="h3">List of events</Typography>
            {registerDataList.map((item, index) => {
              return (
                <>
                  <Stack key={index}>
                    <Typography variant="h5">{item.Title}</Typography>
                    <Typography variant="h6">{item.Description}</Typography>
                  </Stack>
                  <Divider />
                </>
              );
            })}
          </Stack>
        </Stack>
      </>
    </div>
  );
};

export default SGVPK;
