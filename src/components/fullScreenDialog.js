import React, { useContext } from 'react';
// import { makeStyles } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
// import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";

import { ItemsContext } from '../contexts/items'

import config from '../configs/site';

// const useStyles = makeStyles({
const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    },
});

// function Transition(props) {
//   return <Slide direction="up" {...props} />;
// }

function FullScreenDialog(props) {
    //   const classes = useStyles();
    const { classes, handleClose } = props;
    const [searchText, setsearchText] = React.useState("");
    // create suggestions
    const { items = [] } = useContext(ItemsContext);
    const [suggestions/*, setSuggestions*/] = React.useState(() => 
        items.map(item => ({
            id: item.id,
            label: item.name,
            value: item.name.toLowerCase(),
            secondary: `${item.bestprice.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })} (${item.percentage}%)`,
        }))
    );

    // filtering
    const searchTextLow = searchText.toLowerCase();
    // const suggestions = items.filter(value => value.name.toLowerCase().includes(textsearch)).map(suggestion => ({ // includesがIE不可
    const filteredSuggestions = suggestions.filter(suggestion => suggestion.value.indexOf(searchTextLow) >= 0);

    const handleChange = event => {
        setsearchText(event.target.value);
    };

    console.log("render FullScreenDialog:", /*filteredSuggestions,*/ searchText);

    return (
        <>
            {/* <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}> */}
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton color="inherit" onClick={handleClose} aria-label="Close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.flex}>
                        検索
                    </Typography>
                    {/* <Button color="inherit" onClick={handleClose}>
              キャンセル
            </Button> */}
                </Toolbar>
            </AppBar>
            <List>
                <ListItem key="text">
                    <TextField
                        // className={classes.searchText}
                        value={searchText}
                        aria-label={config.searchAriaLabel}
                        autoFocus
                        fullWidth
                        onChange={handleChange}
                    />
                </ListItem>
                {
                    filteredSuggestions.map(item => (
                        <ListItem button component={Link} to={`/items/${item.id}`} key={item.id} divider>
                            <ListItemText primary={item.label} secondary={item.secondary} />
                            {/* <Divider/> */}
                        </ListItem>
                    ))
                }
            </List>
            {/* </Dialog> */}
        </>
    );
}

export default withStyles(styles)(FullScreenDialog);
// export default FullScreenDialog;

