import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import withSystemContext from './contexts/WithSystemContext';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
});

class SimpleSnackbar extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
    this.props.system.updateSnackbarMessage("");
  };

  render() {
    const { classes, system } = this.props;
    const { snackbarMessage } = system;
    const open = !!snackbarMessage;
    if (!open) return null;
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
          onClose={this.handleClose}
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
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

SimpleSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withSystemContext(SimpleSnackbar));
// import React from 'react';
// import PropTypes from 'prop-types';
// import Button from '@material-ui/core/Button';
// import { withStyles } from '@material-ui/core/styles';
// import SnackbarContent from '@material-ui/core/SnackbarContent';

// const action = (
//     <Button color="secondary" size="small">
//         lorem ipsum dolorem
//   </Button>
// );

// const styles = theme => ({
//     snackbar: {
//         margin: theme.spacing.unit,
//     },
// });

// function Snackbar(props) {
//     const { classes, message } = props;

//     return (
//         <>
//             <SnackbarContent className={classes.snackbar} message={message} 
//             // action={action}
//              />
//             {/* <SnackbarContent
//                 className={classes.snackbar}
//                 message={
//                     'I love candy. I love cookies. I love cupcakes. \
//                      I love cheesecake. I love chocolate.'
//                 }
//                 action={action}
//             /> */}
//         </>
//     );
// }

// Snackbar.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Snackbar);
