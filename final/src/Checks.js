import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes() {
  return (
    <div>
      <span>Vegetarian</span>
      <Checkbox {...label} />
      <span>Vegan</span>
      <Checkbox {...label}  />
      <span>Pescetarian</span>
      <Checkbox {...label}  />
      <span>Dairy Free</span>
      <Checkbox {...label}  />
      <span>Gluten Free</span>
      <Checkbox {...label}  />
      <span>Egg Free</span>
      <Checkbox {...label}  />
      <span>Peanut Free</span>
      <Checkbox {...label}  />
      <span>Tree Nut Free</span>
      <Checkbox {...label}  />
    </div>
  );
}
