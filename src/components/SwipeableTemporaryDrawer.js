import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FeedbackIcon from '@material-ui/icons/Feedback';
import HelpIcon from '@material-ui/icons/Help';
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
  const { drawerOpen, closeDrawer, openDrawer } = useContext(SystemContext);

  const toggleDrawer = (side, open) => () => {
    if (open) {
      openDrawer();
    } else {
      closeDrawer();
    }
  };

  const goTo = path => {
    props.history.push(path);
    closeDrawer();
  }

  const sideList = (
    <div className={classes.list}>
      <Typography variant="h3" align="center" gutterBottom component="h2">
        {config.name || "タイトル"}
      </Typography>
      <Divider />
      <List>
        {['ホーム', '調べる',].map((text, index) => (
          <ListItem button key={text} onClick={() => goTo('/')}>
            <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <SearchIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['ヘルプ', 'フィードバックを送信'].map((text, index) => (
          <ListItem button key={text} disabled>
            <ListItemIcon>{index % 2 === 0 ? <HelpIcon /> : <FeedbackIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['プライバシーポリシー', '利用規約'].map((text, index) => (
          <ListItem button key={text} disabled>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
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

export default withStyles(styles)(withRouter(SwipeableTemporaryDrawer));
