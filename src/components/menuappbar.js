import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { UserContext } from '../contexts/user';
import withSystemContext from './WithSystemContext';

import firebase from '../firebase/firebase'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends React.Component {
  state = {
    anchorEl: null,
  };

  // handleChange = event => {
  //   this.setState({ auth: event.target.checked });
  // };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClick = () => {
    // TODO ()=>にするかでthisの違い
    // firebase.auth().signOut().then(function() {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      // TODO 
      this.props.system.updateSnackbarMessage("テスト");    

    }).catch(function(error) {
      // An error happened.
    });
    // TODO finallyにしたほうがいい？
    this.handleClose();    
  };

  render() {
    const { classes, user } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    // const user = this.context;
    const auth = !!user;

    return (
      <div className={classes.root}>
        {/* <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
            }
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup> */}
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              coming soon...
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                  <MenuItem onClick={this.handleClick}>Logout</MenuItem>
                </Menu>
              </div>
            )}
            {(!auth) && (
              <div>
                <Button color="inherit">Loginしてください</Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

// MenuAppBar.contextType = UserContext;

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

// const BlogPostWithSubscription = withSystemContext(
//   MenuAppBar,
//   // (DataSource, props) => DataSource.getBlogPost(props.id)
// );

export default withStyles(styles)(withSystemContext(MenuAppBar));
