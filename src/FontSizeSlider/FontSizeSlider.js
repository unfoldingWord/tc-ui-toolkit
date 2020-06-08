import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({ root: { width: 150 } });

function FontSizeSlider({ value }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        marks
        min={90}
        max={190}
        step={20}
        valueLabelDisplay="auto"
        defaultValue={value || 0}
        aria-labelledby="font-size-slider"
      />
    </div>
  );
}

FontSizeSlider.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FontSizeSlider;
