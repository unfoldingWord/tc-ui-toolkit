import React from 'react';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

function ValueLabelComponent(props) {
  const {
    children, open, value,
  } = props;

  return (
    <LightTooltip open={open} enterTouchDelay={0} placement="top" title={value} arrow>
      {children}
    </LightTooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  gridItem: { cursor: 'pointer' },
  smallFont: {
    display: 'flex',
    margin: '0px',
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
  marks,
  value,
  onChange,
}) {
  console.log('====================================');
  console.log('FontSizeSlider value', value);
  console.log('====================================');
  const classes = useStyles();

  const handleChange = (_, newValue) => {
    if (newValue >= min) {
      onChange(newValue);
    }
  };

  const handleDecrease = () => {
    if (value > min) {
      onChange(value - step);
    }
  };

  const handleIncrease = () => {
    if (value < max) {
      onChange(value + step);
    }
  };

  return (
    <Grid container spacing={2} alignItems='center'>
      <Grid item onClick={handleDecrease} className={{ root: classes.gridItem }}>
        <Glyphicon
          glyph='font'
          className={classes.smallFont}
        />
      </Grid>
      <Grid item style={{ display: 'flex', width: '120px' }}>
        <Slider
          marks={marks}
          min={min}
          max={max}
          step={step}
          onChange={handleChange}
          classes={{
            root: classes.sliderRoot,
            mark: classes.sliderMark,
          }}
          valueLabelDisplay="on"
          aria-labelledby='font-size-slider'
          ValueLabelComponent={ValueLabelComponent}
          value={typeof value === 'number' ? value : min}
        />
      </Grid>
      <Grid item onClick={handleIncrease} className={{ root: classes.gridItem }}>
        <Glyphicon
          glyph='font'
          className={classes.largeFont}
        />
      </Grid>
    </Grid>
  );
}

FontSizeSlider.defaultProps = {
  min: 80,
  max: 260,
  step: 20,
  value: 100,// 100%
  marks: true,
};

FontSizeSlider.propTypes = {
  marks: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default FontSizeSlider;
