import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { SystemContext } from '../contexts/system';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
});

function SimpleSnackbar(props) {
  const { classes } = props;
  const { snackbarMessage, updateSnackbarMessage } = useContext(SystemContext);
  const open = !!snackbarMessage;
  if (!open) return null;

  // handleClick = () => {
  //   this.setState({ open: true });
  // };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    updateSnackbarMessage("");
  };

  return (
    <div>
      {/* <Button onClick={this.handleClick}>Open simple snackbar</Button> */}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        // open={this.state.open}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{snackbarMessage}</span>}
        action={[
          // <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
          //   UNDO
          // </Button>,
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </div>
  );
}

export default withStyles(styles)(SimpleSnackbar);
