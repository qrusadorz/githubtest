import React from 'react';
// import { makeStyles } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
// import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
// import DirectionsIcon from '@material-ui/icons/Directions';
import Dialog from '@material-ui/core/Dialog';

import FullScreenDialog from './fullScreenDialog';

import config from '../configs/site';

const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    // width: 400,
    maxWidth: 500,
  },
  input: {
    marginLeft: 8,
    flex: 1,
    // original
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
};

function CustomizedInputBase(props) {
  //   const classes = useStyles();
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  console.log("render() CustomizedInputBase");

  const handleClickOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  function handleClose() {
    console.log("hangle close.");
    setOpen(false);
  }

  return (
    <>
      <Paper className={classes.root} elevation={1}>
        {/* <IconButton className={classes.iconButton} aria-label="Menu">
          <MenuIcon />
        </IconButton> */}
        <InputBase
          aria-label={config.searchAriaLabel}
          className={classes.input}
          placeholder={config.searchPlaceholder}
          onClick={handleClickOpen}
        />
        <IconButton className={classes.iconButton} aria-label="Search" onClick={handleClickOpen}>
          <SearchIcon />
        </IconButton>
        {/* <Divider className={classes.divider} />
        <IconButton color="primary" className={classes.iconButton} aria-label="Directions">
          <DirectionsIcon />
        </IconButton> */}
      </Paper>
      {/* <Dialog fullScreen open={open} onClose={() => handleClose()}> */}
      <Dialog fullScreen open={open}>
        <FullScreenDialog handleClose={handleClose} />
      </Dialog>
    </>
  );
}

export default withStyles(styles)(CustomizedInputBase);