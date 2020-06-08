import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({ root: { width: 300 } });

function FontSlider({ value }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        marks
        min={10}
        max={100}
        step={10}
        valueLabelDisplay="auto"
        defaultValue={value || 0}
        aria-labelledby="font-size-slider"
      />
    </div>
  );
}

FontSlider.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FontSlider;
