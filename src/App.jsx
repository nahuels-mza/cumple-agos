import { createTheme, ThemeProvider } from "@mui/material/styles";
import Invite from "./Invite/Invite";

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Invite />
    </ThemeProvider>
  );
};

export default App;
