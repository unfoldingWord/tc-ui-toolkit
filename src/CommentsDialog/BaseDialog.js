import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import DialogActions from '@material-ui/core/DialogActions';

function PaperComponent(props) {
  // component will only be draggable by element with the className in the handle prop
  return (
    <Draggable handle=".BaseDialog-draggable-handle">
      <Paper {...props} />
    </Draggable>
  );
}

/**
 * Generates the dialog actions
 * @param {bool} actionsEnabled enables/disables the action buttons
 * @param {*} primaryLabel the title of the primary button
 * @param {*} secondaryLabel the title of the secondary button
 * @param {func} onPrimaryClick the click callback of the primary button
 * @param {func} onSecondaryClick the click callback of the secondary button
 * @return {*}
 */
const makeDialogActions = ({
  primaryActionEnabled,
  secondaryActionEnabled,
  primaryLabel,
  secondaryLabel,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  const hasPrimaryLabel = Boolean(primaryLabel);
  const hasSecondaryLabel = Boolean(secondaryLabel);
  const hasPrimaryCallback = Boolean(onPrimaryClick);
  const hasSecondaryCallback = Boolean(onSecondaryClick);
  const actions = [];

  const primaryButton = (
    <button
      className="btn-prime"
      disabled={!primaryActionEnabled}
      onClick={onPrimaryClick}
    >
      {primaryLabel}
    </button>
  );
  const secondaryButton = (
    <button
      className="btn-second"
      disabled={!secondaryActionEnabled}
      onClick={onSecondaryClick}
    >
      {secondaryLabel}
    </button>
  );

  if (hasSecondaryLabel && hasSecondaryCallback) {
    actions.push(secondaryButton);
  }

  if (hasPrimaryLabel && hasPrimaryCallback) {
    actions.push(primaryButton);
  }
  return actions;
};

const styles = {
  actionRoot: { padding: 0 },
  paperRoot: { margin: '0px' },
};


/**
 * Represents a generic dialog.
 * You could use this to display simple information,
 * or you could create a new component that wraps this component
 * with some custom functionality.
 *
 * @class
 * @property {bool} [modal] - controls whether this dialog is modal
 * @property {Object[]} [actions] - a custom list of actions. This overrides the default secondary and primary actions.
 * @property {*} [title] - the title of the dialog
 * @property {*} [secondaryLabel] - the label of the secondary action
 * @property {*} [primaryLabel] - the label of the primary action
 * @property {bool} [actionsEnabled] - controls whether the actions are enabled or disabled
 * @property {bool} [open] - controls whether the dialog is open
 * @property {func} [onClose] - callback when the secondary button is triggered. Overridden by `actions`
 * @property {func} [onSubmit] - callback when the primary button is triggered. Overridden by `actions`
 */
class BaseDialog extends React.Component {
  componentDidCatch(error, info) {
    console.error(error);
    console.warn(info);
  }

  render() {
    const {
      primaryActionEnabled,
      secondaryActionEnabled,
      modal,
      title,
      bodyStyle,
      secondaryLabel,
      primaryLabel,
      onClose,
      onSubmit,
      open,
      children,
      actions,
      scrollableContent,
      contentStyle,
      classes,
    } = this.props;

    let dialogActions = actions
      ? actions
      : makeDialogActions({
        primaryActionEnabled,
        secondaryActionEnabled,
        primaryLabel,
        secondaryLabel,
        onPrimaryClick: onSubmit,
        onSecondaryClick: onClose,
      });

    let isModal = dialogActions.length !== 0;

    if (typeof modal !== 'undefined') {
      isModal = modal;
    }

    return (
      <Dialog
        open={open}
        modal={isModal}
        bodyStyle={bodyStyle}
        contentStyle={contentStyle}
        autoScrollBodyContent={scrollableContent}
        onRequestClose={onClose}
        actions={dialogActions}
        onClose={onClose}
        fullWidth={true}
        PaperComponent={PaperComponent}
        PaperProps={{ className: classes.paperRoot }}
        aria-labelledby={`draggable-${title}-dialog`}
      >
        <DialogTitle
          disableTypography={true}
          className="BaseDialog-draggable-handle"
          style={{
            color: 'var(--reverse-color)',
            backgroundColor: 'var(--accent-color-dark)',
            padding: '15px',
            display: 'block',
            width: '100%',
            fontSize: 22,
            fontWeight: 400,
            cursor: 'move',
          }}>
          {title}
        </DialogTitle>
        {children}
        <DialogActions disableActionSpacing={true}>
          {dialogActions}
        </DialogActions>
      </Dialog>
    );
  }
}

BaseDialog.propTypes = {
  modal: PropTypes.bool,
  actions: PropTypes.array,
  title: PropTypes.any,
  secondaryLabel: PropTypes.any,
  primaryLabel: PropTypes.any,
  primaryActionEnabled: PropTypes.bool,
  secondaryActionEnabled: PropTypes.bool,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  scrollableContent: PropTypes.bool,
  titleStyle: PropTypes.object,
  children: PropTypes.any,
  bodyStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  classes: PropTypes.object,
};

BaseDialog.defaultProps = {
  primaryActionEnabled: true,
  secondaryActionEnabled: true,
  titleStyle: {},
  modal: false,
};

export default withStyles(styles)(BaseDialog);
