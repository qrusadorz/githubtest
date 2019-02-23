import React, { useContext } from 'react';
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

import config from '../configs/site'

import { SystemContext } from '../contexts/system';
import { DrawerContext } from '../contexts/drawer';
import { UserContext } from '../contexts/user';

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

function MenuAppBar(props) {
  const { classes } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { login, logout } = useContext(SystemContext);
  const { openDrawer } = useContext(DrawerContext);
  const user = useContext(UserContext);
  const open = Boolean(anchorEl);

  const auth = !!user;

  // handleChange = event => {
  //   this.setState({ auth: event.target.checked });
  // };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    login();
  };

  const handleClick = () => {
    handleClose();
    logout();
  };

  const handleDrawer = () => {
    openDrawer();
  };

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
      <AppBar position="fixed">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"
            onClick={handleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {config.name || "タイトル"}
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={handleMenu}
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
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClick}>Logout</MenuItem>
              </Menu>
            </div>
          )}
          {(!auth) && (
            <div>
              {/* // TODO しばらくログインは封印 */}
              <Button color="inherit" onClick={handleLogin} disabled >ログイン</Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(MenuAppBar);
