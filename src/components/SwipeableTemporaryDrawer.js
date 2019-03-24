import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FeedbackIcon from '@material-ui/icons/Feedback';
import HelpIcon from '@material-ui/icons/Help';
import HomeIcon from '@material-ui/icons/Home';
import NewIcon from '@material-ui/icons/NewReleases';
import SearchIcon from '@material-ui/icons/Search';
import SettingIcon from '@material-ui/icons/Settings';
import ShoppingIcon from '@material-ui/icons/ShoppingCart';

import Typography from '@material-ui/core/Typography';

import { Link } from "react-router-dom";

import { DrawerContext } from '../contexts/drawer';

import config from '../configs/site'

import { groups } from '../contexts/items';

const styles = {
  list: {
    width: 270,
  },
  fullList: {
    width: 'auto',
  },
};


// const groups = config.getGrouppaths();

const sideList = (itemgroups, handleFeedback) => (
    <>
      <Typography variant="h3" align="center" gutterBottom component="h2">
        {config.name}
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
        <ListItem button key='Settings' component={Link} to={`/settings`}>
          <ListItemIcon><SettingIcon /></ListItemIcon>
          <ListItemText primary='設定' />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key='Favorite' component={Link} to={`/itemgroups/favorite`}>
          <ListItemIcon><FavoriteIcon /></ListItemIcon>
          <ListItemText primary='お気に入り' />
        </ListItem>
        <ListItem button key='New' component={Link} to={`/itemgroups/new`}>
          <ListItemIcon><NewIcon /></ListItemIcon>
          <ListItemText primary='新製品' />
        </ListItem>
        {itemgroups.map((text, index) => (
          <ListItem button key={text} component={Link} to={`/itemgroups/${text.toLowerCase()}`}>
            <ListItemIcon><ShoppingIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {/* {['ヘルプ', 'フィードバックを送信'].map((text, index) => (
          <ListItem button key={text} onClick={handleFeedback}>
            <ListItemIcon>{index % 2 === 0 ? <HelpIcon /> : <FeedbackIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
        <ListItem button key='ヘルプ' component={Link} to={`/help`}>
        {/* <ListItem button key='ヘルプ' disabled> */}
          <ListItemIcon><HelpIcon /></ListItemIcon>
          <ListItemText primary='ヘルプ' />
        </ListItem>
        {/* <ListItem button key='フィードバックを送信' component={Link} to={`/feedback`} disabled> */}
        <ListItem button key='フィードバックを送信' onClick={handleFeedback}>
          <ListItemIcon><FeedbackIcon /></ListItemIcon>
          <ListItemText primary='フィードバックを送信' />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key='プライバシーポリシー' component={Link} to={`/privacy`}>
          <ListItemText primary='プライバシーポリシー' />
        </ListItem>
        <ListItem button key='利用規約' component={Link} to={`/terms`}>
          <ListItemText primary='利用規約' />
        </ListItem>

        {/* {['プライバシーポリシー', '利用規約'].map((text, index) => (
          <ListItem button key={text} disabled>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
    </>
);

function SwipeableTemporaryDrawer(props) {
  const { classes, handleFeedback } = props;
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
  const itemgroups = config.getGrouppaths(groups);

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
              {sideList(itemgroups, handleFeedback)}
            </div>
        </div>
      </SwipeableDrawer>
  );
}

export default withStyles(styles)(SwipeableTemporaryDrawer);
