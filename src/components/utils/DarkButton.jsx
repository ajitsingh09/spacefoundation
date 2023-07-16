import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/system";

const DarkButton = styled(MuiButton)({
  width: 100,
  height: 40,
  color: "black",
  backgroundColor: "#ffcc00",
  paddingLeft: 5,
  paddingRight: 5,
  borderRadius: 0,
  transition: "background-color 0.3s ease",
  outline: "1px solid #d1d1d1",
  outlineWidth: 0.5,
  textTransform: "none",

  "&:hover": {
    backgroundColor: "transparent",
    transition:
      "background-color 0.3s ease-in-out 0.2s,color 0.3s ease-in-out 0.2s",
    color: "#ffcc00",
  },
});

export default DarkButton;
