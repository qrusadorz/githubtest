import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';

import Typography from '@material-ui/core/Typography';

import { withRouter } from "react-router-dom";

import { SystemContext } from '../contexts/system';

import config from '../configs/site'

const styles = {
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
};

function SwipeableTemporaryDrawer(props) {
  const { classes } = props;
  const { drawerOpen, closeDrawer } = useContext(SystemContext);

  const toggleDrawer = (side, open) => () => {
    if (open) return;
    closeDrawer();
  };

  const sideList = (
    <div className={classes.list}>
      <Typography variant="h3" align="center" gutterBottom component="h2">
        {config.name || "タイトル"}
      </Typography>
      <Divider />
      <List>
        {['ホーム', '調べる', '急上昇ワード'].map((text, index) => (
          <ListItem button key={text} onClick={() => props.history.push('/')}>
            <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <SearchIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['ヘルプ', 'フィードバックを送信'].map((text, index) => (
          <ListItem button key={text} onClick={() => props.history.push('/items/5533')}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <SwipeableDrawer
        open={drawerOpen}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer('left', false)}
          onKeyDown={toggleDrawer('left', false)}
        >
          {sideList}
        </div>
      </SwipeableDrawer>
    </div>
  );
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(SwipeableTemporaryDrawer));
