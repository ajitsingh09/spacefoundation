import { createTheme } from "@mui/material/styles";
import "../Fonts/font.css";

const theme = createTheme({
  typography: {
    fontFamily: "SourceSans3,Ubuntu,UbuntuMedium, sans-serif",
  },
  palette: {
    secondary: {
      main: "#ffcc00",
    },
  },
});

export default theme;
