import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function GeneroBtn() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Género</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="hembra" control={<Radio />} label="Hembra" />
        <FormControlLabel value="macho" control={<Radio />} label="Macho" />
      </RadioGroup>
    </FormControl>
  );
}