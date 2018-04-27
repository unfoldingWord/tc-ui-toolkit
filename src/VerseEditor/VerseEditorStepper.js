import React from 'react';
import PropTypes from 'prop-types';
import Stepper, {Step, StepLabel} from 'material-ui/Stepper';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  label: {
    fontSize: 14
  }
});

/**
 * Renders the steps for editing a verse
 * @property {object} [style] - custom style attributes
 * @property {int} stepIndex - the current step index
 * @property {string[]} steps - an array of steps
 */
class VerseEditorStepper extends React.Component {
  render() {
    const {stepIndex, steps, style, classes} = this.props;
    return (
      <Stepper activeStep={stepIndex} style={style}>
        {steps.map((step, index) => {
          return (
            <Step key={index}>
              <StepLabel classes={{
                label: classes.label
              }}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    );
  }
}

VerseEditorStepper.propTypes = {
  style: PropTypes.object,
  stepIndex: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default withStyles(styles)(VerseEditorStepper);
