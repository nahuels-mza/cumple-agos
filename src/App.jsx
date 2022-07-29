import { createTheme, ThemeProvider } from "@mui/material/styles";
import Invite from "./Invite/Invite";
import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Arial"].join(","),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Invite />
    </ThemeProvider>
  );
};

export default App;
