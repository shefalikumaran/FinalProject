import * as React from 'react';
import './DietaryPref.css';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxesGroup() {
  const [state, setState] = React.useState({
    vegetarian: true,
    vegan: false,
    nuts: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { vegetarian, vegan, nuts } = state;
  const error = [vegetarian, vegan, nuts].filter((v) => v).length !== 2;

  return (
    <Box classname= "dietBox" sx={
      { display: 'flex', width: '25%', height: '25%', backgroundColor: 'white', border: '1px solid black'}}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Filter By Dietary Preference</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={vegetarian} onChange={handleChange} name="vegetarian" />
            }
            label="Vegetarian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={vegan} onChange={handleChange} name="vegan" />
            }
            label="Vegan"
          />
          <FormControlLabel
            control={
              <Checkbox checked={nuts} onChange={handleChange} name="nuts" />
            }
            label="nuts"
          />
        </FormGroup>
      </FormControl>
      <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        <FormLabel component="legend"></FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={vegetarian} onChange={handleChange} name="vegetarian" />
            }
            label="Vegetarian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={vegan} onChange={handleChange} name="vegan" />
            }
            label="Vegan"
          />
          <FormControlLabel
            control={
              <Checkbox checked={nuts} onChange={handleChange} name="nuts" />
            }
            label="nuts"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
}
