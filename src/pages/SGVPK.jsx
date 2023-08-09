import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Stack,
  TextField,
  Checkbox,
  InputLabel,
  Autocomplete,
  MenuItem,
  FormControl,
  Select,
  Divider,
  Modal,
} from "@mui/material";
import { countries } from "../dummydata";
import Button from "../components/utils/Button";
const SGVPK = () => {
  const [registerData, setRegisterData] = useState({
    Title: "",
    Description: "",
    OnlineEvent: false,
    Status: "",
    VenueName: "",
    Address: "",
    City: "",
    Country: "",
    State: "",
    PostalCode: "",
    Phone: "",
    Website: "",
    OrganizerName: "",
    PhoneOrg: "",
    Email: "",
    Link: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    // Reset the form or take any other action when the modal is closed
    setIsModalOpen(false);
  };

  const [registerDataList, setRegisterDataList] = useState([
    {
      Title: "1st event",
      Description: "1st description",
      OnlineEvent: "",
      Status: "",
      VenueName: "",
      Address: "",
      City: "",
      Country: "",
      State: "",
      PostalCode: "",
      Phone: "",
      Website: "",
      OrganizerName: "",
      PhoneOrg: "",
      Email: "",
      Link: "",
    },
    {
      Title: "2nd event",
      Description: "2nd description",
      OnlineEvent: "",
      Status: "",
      VenueName: "",
      Address: "",
      City: "",
      Country: "",
      State: "",
      PostalCode: "",
      Phone: "",
      Website: "",
      OrganizerName: "",
      PhoneOrg: "",
      Email: "",
      Link: "",
    },
    {
      Title: "3rd event",
      Description: "3rd description",
      OnlineEvent: "",
      Status: "",
      VenueName: "",
      Address: "",
      City: "",
      Country: "",
      State: "",
      PostalCode: "",
      Phone: "",
      Website: "",
      OrganizerName: "",
      PhoneOrg: "",
      Email: "",
      Link: "",
    },
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
    setIsModalOpen(true);
    setRegisterData({
      Title: "",
      Description: "",
      OnlineEvent: "",
      Status: "",
      VenueName: "",
      Address: "",
      City: "",
      Country: "",
      State: "",
      PostalCode: "",
      Phone: "",
      Website: "",
      OrganizerName: "",
      PhoneOrg: "",
      Email: "",
      Link: "",
    });
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
          sx={{ bgcolor: "white" }}
          justifyContent={"center "}
          alignItems={"center"}
          p={5}
        >
          <Stack width={"70%"} sx={{ outline: "1px solid grey", p: 5 }}>
            <Stack component={"form"} gap={4}>
              <Typography
                variant="h3"
                textTransform={"uppercase"}
                textAlign={"center"}
              >
                register an event
              </Typography>
              <Divider />
              <Stack gap={2}>
                <Typography variant="h6" textTransform={"uppercase"}>
                  EVENT TITLE:
                </Typography>
                <TextField
                  required
                  id="outlined-required"
                  label="Event Title "
                  value={registerData.Title}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, Title: e.target.value })
                  }
                />
              </Stack>
              <Stack gap={2}>
                <Typography variant="h6" textTransform={"uppercase"}>
                  EVENT DESCRIPTION:
                </Typography>
                <TextField
                  required
                  id="outlined-required"
                  label="Event Description"
                  multiline
                  rows={10}
                  value={registerData.Description}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      Description: e.target.value,
                    })
                  }
                />
              </Stack>
              <Typography variant="h6">
                This is an onlineEvent Event
                <Checkbox
                  checked={registerData.OnlineEvent}
                  onChange={(e) => {
                    setRegisterData({
                      ...registerData,
                      OnlineEvent: e.target.checked,
                    });
                  }}
                />
              </Typography>

              <Stack sx={{ outline: "1px solid grey", p: 2 }}>
                <Stack component={"form"} gap={2}>
                  <Typography variant="h6" textTransform={"uppercase"}>
                    EVENT TIME & DATE:
                  </Typography>
                  <Divider />
                  <Typography fontSize={"16px"} color={"grey"}>
                    Start/End:
                  </Typography>
                </Stack>
              </Stack>
              <Stack sx={{ outline: "1px solid grey", p: 2 }}>
                <Stack component={"form"} gap={2}>
                  <Typography variant="h6" textTransform={"uppercase"}>
                    EVENT STATUS:
                  </Typography>
                  <Divider />

                  <Box sx={{ minWidth: 120 }} p={2}>
                    <FormControl sx={{ width: "25%" }}>
                      <InputLabel id="demo-simple-select-label">
                        Status
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Age"
                        // onChange={handleChange}
                        value={registerData.Status}
                        onChange={(e) =>
                          setRegisterData({
                            ...registerData,
                            Status: e.target.value,
                          })
                        }
                      >
                        <MenuItem value={"SCHEDULED"}>SCHEDULED</MenuItem>
                        <MenuItem value={"CANCELLED"}>CANCELLED</MenuItem>
                        <MenuItem value={"POSTPONED"}>POSTPONED</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Divider />
                </Stack>
              </Stack>
              <Stack sx={{ outline: "1px solid grey", p: 2 }}>
                <Stack component={"form"} gap={2}>
                  <Typography variant="h6" textTransform={"uppercase"}>
                    VENUE DETAILS:
                  </Typography>
                  <Divider />
                  <Stack direction={"row"}>
                    <Typography fontSize={"15px"} color={"grey"} width={"20%"}>
                      Venue Name:
                    </Typography>
                    <TextField
                      sx={{ width: "80%" }}
                      required
                      id="outlined-required"
                      label=""
                      value={registerData.VenueName}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          VenueName: e.target.value,
                        })
                      }
                    />
                  </Stack>
                  <Stack direction={"row"}>
                    <Typography fontSize={"15px"} color={"grey"} width={"20%"}>
                      Address:
                    </Typography>
                    <TextField
                      sx={{ width: "80%" }}
                      required
                      id="outlined-required"
                      label=""
                      value={registerData.Address}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          Address: e.target.value,
                        })
                      }
                    />
                  </Stack>
                  <Stack direction={"row"}>
                    <Typography fontSize={"15px"} color={"grey"} width={"20%"}>
                      City:
                    </Typography>
                    <TextField
                      sx={{ width: "80%" }}
                      required
                      id="outlined-required"
                      label=""
                      value={registerData.City}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          City: e.target.value,
                        })
                      }
                    />
                  </Stack>
                  <Stack direction={"row"}>
                    <Typography fontSize={"15px"} color={"grey"} width={"20%"}>
                      Country:
                    </Typography>
                    <Autocomplete
                      id="country-select-demo"
                      sx={{ width: 300 }}
                      options={countries}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                          {...props}
                        >
                          <img
                            loading="lazy"
                            width="20"
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            alt=""
                          />
                          {option.label} ({option.code}) +{option.phone}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Choose a country"
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password", // disable autocomplete and autofill
                          }}
                        />
                      )}
                    />
                  </Stack>
                  <Stack direction={"row"}>
                    <Typography fontSize={"15px"} color={"grey"} width={"20%"}>
                      State:
                    </Typography>
                    <TextField
                      sx={{ width: "80%" }}
                      required
                      id="outlined-required"
                      label=""
                      value={registerData.State}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          State: e.target.value,
                        })
                      }
                    />
                  </Stack>
                  <Stack direction={"row"}>
                    <Typography fontSize={"15px"} color={"grey"} width={"20%"}>
                      Postal Code:
                    </Typography>
                    <TextField
                      sx={{ width: "80%" }}
                      required
                      id="outlined-required"
                      label=""
                      value={registerData.PostalCode}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          PostalCode: e.target.value,
                        })
                      }
                    />
                  </Stack>
                  <Stack direction={"row"}>
                    <Typography fontSize={"15px"} color={"grey"} width={"20%"}>
                      Phone:
                    </Typography>
                    <TextField
                      sx={{ width: "80%" }}
                      required
                      id="outlined-required"
                      label=""
                      value={registerData.Phone}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          Phone: e.target.value,
                        })
                      }
                    />
                  </Stack>
                  <Stack direction={"row"}>
                    <Typography fontSize={"15px"} color={"grey"} width={"20%"}>
                      Website:
                    </Typography>
                    <TextField
                      sx={{ width: "80%" }}
                      required
                      id="outlined-required"
                      label=""
                      value={registerData.Website}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          Website: e.target.value,
                        })
                      }
                    />
                  </Stack>
                  <Divider />
                </Stack>
              </Stack>
              <Stack sx={{ outline: "1px solid grey", p: 2 }}>
                <Stack component={"form"} gap={2}>
                  <Typography variant="h6" textTransform={"uppercase"}>
                    organizer details:
                  </Typography>
                  <Divider />
                  <Stack direction={"row"}>
                    <Typography fontSize={"15px"} color={"grey"} width={"20%"}>
                      Organizer Name:
                    </Typography>
                    <TextField
                      sx={{ width: "80%" }}
                      required
                      id="outlined-required"
                      label=""
                      value={registerData.OrganizerName}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          OrganizerName: e.target.value,
                        })
                      }
                    />
                  </Stack>
                  <Stack direction={"row"}>
                    <Typography fontSize={"15px"} color={"grey"} width={"20%"}>
                      Phone:
                    </Typography>
                    <TextField
                      sx={{ width: "80%" }}
                      required
                      id="outlined-required"
                      label=""
                      value={registerData.PhoneOrg}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          PhoneOrg: e.target.value,
                        })
                      }
                    />
                  </Stack>
                  <Stack direction={"row"}>
                    <Typography fontSize={"15px"} color={"grey"} width={"20%"}>
                      Email:
                    </Typography>
                    <TextField
                      sx={{ width: "80%" }}
                      required
                      id="outlined-required"
                      label=""
                      value={registerData.Email}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          Email: e.target.value,
                        })
                      }
                    />
                  </Stack>

                  <Divider />
                </Stack>
              </Stack>
              <Stack sx={{ outline: "1px solid grey", p: 2 }}>
                <Stack component={"form"} gap={2}>
                  <Typography variant="h6" textTransform={"uppercase"}>
                    event link:
                  </Typography>
                  <Divider />

                  <Stack direction={"row"}>
                    <Typography fontSize={"15px"} color={"grey"} width={"20%"}>
                      Link to your Event:
                    </Typography>
                    <TextField
                      sx={{ width: "80%" }}
                      id="outlined-required"
                      label="Please enter the link to join your event here."
                      value={registerData.Link}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          Link: e.target.value,
                        })
                      }
                    />
                  </Stack>

                  <Divider />
                </Stack>
              </Stack>
              <Stack alignItems={"center"}>
                <Button
                  type="submit"
                  variant="contained"
                  onClick={handleOnSubmit}
                  sx={{ width: "30%" }}
                >
                  Submit
                </Button>
                <Modal
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  open={isModalOpen}
                  aria-labelledby="submission-modal-title"
                  aria-describedby="submission-modal-description"
                >
                  <Stack
                    width={{ xs: 100, sm: 200, md: 300 }}
                    alignItems={"center"}
                    justifyContent={"center"}
                    sx={{ p: 6, bgcolor: "white", borderRadius: 4 }}
                  >
                    <h2 id="submission-modal-title">Submission Successful</h2>
                    <p id="submission-modal-description">
                      Your form has been successfully submitted.
                    </p>
                    <Button
                      onClick={handleModalClose}
                      variant="h6"
                      sx={{ width: "50%" }}
                    >
                      Submit Another
                    </Button>
                  </Stack>
                </Modal>
              </Stack>
            </Stack>
            <Stack pt={5}>
              <Typography variant="h3">List of events</Typography>
              {registerDataList.map((item, index) => {
                return (
                  <>
                    <Stack key={index}>
                      {Object.keys(item).map((fields, index) => {
                        if (fields === "OnlineEvent") {
                          if (item.OnlineEvent) {
                            return (
                              <Typography variant="h6">
                                Event is online
                              </Typography>
                            );
                          }
                        } else {
                          return (
                            <Typography key={fields} variant="h6">
                              {" "}
                              {item[fields]}
                            </Typography>
                          );
                        }
                      })}
                    </Stack>
                    <Divider />
                  </>
                );
              })}
            </Stack>
          </Stack>
        </Stack>
      </>
    </div>
  );
};

export default SGVPK;
