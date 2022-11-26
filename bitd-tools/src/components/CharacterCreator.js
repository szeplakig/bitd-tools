import React, { useState } from "react";
import {
  classes,
  heritages,
  backgrounds,
  vices,
  actions,
  standard_items,
} from "../data/characters_data";

import {
  TextField,
  InputLabel,
  FormControl,
  MenuItem,
  Box,
  Autocomplete,
} from "@mui/material";

const CharacterCreator = () => {
  let [selected_class, set_selected_class] = useState("");
  const handleChange = (event) => {
    set_selected_class(event.target.value);
  };
  return (
    <div className="inline-block">
      <FormControl fullWidth>
        <Box m={5} pt={3} width="140px">
          <InputLabel id="class-select-label">Classes</InputLabel>
          <Autocomplete
            labelId="class-select-label"
            id="class-select"
            variant="outlined"
            type="search"
            options={Object.keys(classes).map((class_name) => {
              return { value: { class_name }, label: { class_name } };
            })}
            value={selected_class}
            label={selected_class}
            onChange={handleChange}
            fullWidth
          ></Autocomplete>
        </Box>
      </FormControl>
    </div>
  );
};

export default CharacterCreator;
