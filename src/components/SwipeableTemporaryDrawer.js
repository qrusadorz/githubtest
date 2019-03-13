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
import ShoppingIcon from '@material-ui/icons/ShoppingCart';

import Typography from '@material-ui/core/Typography';

import { Link } from "react-router-dom";

import { DrawerContext } from '../contexts/drawer';

import config from '../configs/site'

import { groups } from '../contexts/items';

const styles = {
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
};

// const groups = config.getGrouppaths();

const sideList = itemgroups => (
    <>
      <Typography variant="h3" align="center" gutterBottom component="h2">
        {config.name || "タイトル"}
      </Typography>
      <Divider />
      <List>
        {['ホーム', '調べる',].map((text, index) => (
          <ListItem button key={text} component={Link} to={`/`}>
            <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <SearchIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {itemgroups.map((text, index) => (
          <ListItem button key={text} component={Link} to={`/itemgroups/${text.toLowerCase()}`}>
            <ListItemIcon><ShoppingIcon /></ListItemIcon>
            <ListItemText primary={text.toUpperCase()} />
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
    </>
);

function SwipeableTemporaryDrawer(props) {
  const { classes } = props;
  const { drawerOpen, closeDrawer, openDrawer } = useContext(DrawerContext);

  console.log("render() SwipeableTemporaryDrawer");

  const toggleDrawer = (side, open) => () => {
    if (open) {
      openDrawer();
    } else {
      closeDrawer();
    }
  };

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  // TODO 暫定で毎回取得
  const itemgroups = config.getGrouppaths(groups).slice(1);

  return (
      <SwipeableDrawer
        open={drawerOpen}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
        disableBackdropTransition={!iOS} disableDiscovery={iOS}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer('left', false)}
          onKeyDown={toggleDrawer('left', false)}
        >
            <div className={classes.list}>
              {sideList(itemgroups)}
            </div>
        </div>
      </SwipeableDrawer>
  );
}

export default withStyles(styles)(SwipeableTemporaryDrawer);
