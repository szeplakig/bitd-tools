import "./App.css";
import CharacterCreator from "./components/CharacterCreator";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <CharacterCreator />
      </div>
    </ThemeProvider>
  );
}

export default App;
