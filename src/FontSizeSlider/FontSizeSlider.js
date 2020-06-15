import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';

import Slider from '@material-ui/core/Slider';

function FontSizeSlider({ initialValue }) {
  const [value, setValue] = useState(initialValue);
  const step = 20;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Grid container spacing={2}>
      <Grid item>
        <Glyphicon glyph='font' style={{ marginRight: '10px' }} onClick={() => handleChange(value - step)}/>
      </Grid>
      <Grid item style={{ width: '120px' }}>
        <Slider
          marks
          min={90}
          max={190}
          step={step}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          defaultValue={value || 0}
          aria-labelledby="font-size-slider"
        />
      </Grid>
      <Grid item>
        <Glyphicon glyph='font' style={{ marginLeft: '10px' }} onClick={() => handleChange(value - step)}/>
      </Grid>
    </Grid>
  );
}

FontSizeSlider.propTypes = {
  initialValue: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FontSizeSlider;
