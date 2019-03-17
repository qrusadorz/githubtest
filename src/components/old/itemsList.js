import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import items from '../../userdata/items';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});

function AlignItemsList(props) {
  const { classes } = props;
  // min is high.
  items.sort((a, b) => (a.secondary > b.secondary ? 1: -1));
  return (
    <List className={classes.root}>
        {
        items.map(data => (
        <ListItem alignItems="flex-start" button>
            <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={ data.image ? data.image : "/static/images/avatar/1.jpg"} />
            </ListItemAvatar>
            <ListItemText
            primary={data.primary}
            secondary={
                <>
                {/* <Typography component="span" className={classes.inline} color="textPrimary">
                    Ali Connors
                </Typography> */}
                    {
                        data.secondary > 0.99 ? 
                            data.secondary : 
                            <Typography component="span" className={classes.inline} color="error">{data.secondary}</Typography>
                    }
                </>
            }
            />
            <ListItemSecondaryAction>
              <IconButton aria-label="Comments">
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        ))
        }
      {/* <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <>
              <Typography component="span" className={classes.inline} color="textPrimary">
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </>
          }
        />
      </ListItem> */}
    </List>
  );
}

export default withStyles(styles)(AlignItemsList);