import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  classes,
  heritages,
  backgrounds,
  vices,
  actions,
  standard_items,
} from "../data/characters_data";

import { TextField, MenuItem, Box } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const CharacterCreator = () => {
  let [selected_class, set_selected_class] = useState("");
  const handleChange = (event) => {
    set_selected_class(event.target.value);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="inline-block">
        <Box m={5} pt={3} width="140px">
          <TextField
            id="class-select"
            label="Class"
            value={selected_class}
            select
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {Object.keys(classes).map((class_name) => (
              <MenuItem key={`k-${class_name}`} value={class_name}>
                {class_name}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        {selected_class && (
          <Box>
            <h2>{classes[selected_class].tag_line}</h2>
            <h3>{classes[selected_class].description}</h3>
            {classes[selected_class].long_description.map((section) => (
              <p>{section}</p>
            ))}
          </Box>
        )}
      </div>
    </ThemeProvider>
  );
};

export default CharacterCreator;
