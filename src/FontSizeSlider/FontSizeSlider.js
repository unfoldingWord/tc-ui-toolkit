import React from 'react';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  smallFont: {
    display: 'flex',
    margin: '0px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  largeFont: {
    margin: '0px',
    cursor: 'pointer',
    fontSize: '22px',
  },
  sliderRoot: { color: '#19579E' },
  sliderMark: { backgroundColor: '#19579E' },
});

function FontSizeSlider({
  min,
  max,
  step,
  value,
  onChange,
}) {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    if (newValue >= 0) {
      onChange(newValue);
    }
  };

  const handleDecrease = () => {
    if (value !== min) {
      onChange(value - step);
    }
  };

  const handleIncrease = () => {
    if (value !== max) {
      onChange(value + step);
    }
  };

  return (
    <Grid container spacing={2} alignItems='center'>
      <Grid item>
        <Glyphicon
          glyph='font'
          onClick={handleDecrease}
          className={classes.smallFont}
        />
      </Grid>
      <Grid item style={{ display: 'flex', width: '120px' }}>
        <Slider
          marks
          min={min}
          max={max}
          step={step}
          onChange={handleChange}
          classes={{
            root: classes.sliderRoot,
            mark: classes.sliderMark,
          }}
          aria-labelledby='font-size-slider'
          value={typeof value === 'number' ? value : min}
        />
      </Grid>
      <Grid item>
        <Glyphicon
          glyph='font'
          onClick={handleIncrease}
          className={classes.largeFont}
        />
      </Grid>
    </Grid>
  );
}

FontSizeSlider.defaultProps = {
  min: 90,
  max: 190,
  step: 20,
  value: 90,
};

FontSizeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FontSizeSlider;
