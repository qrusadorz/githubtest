import React, { useContext } from 'react';
// import { makeStyles } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
// import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import { withRouter } from "react-router-dom";

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
    // TODO TESST
    searchText: {
        position: 'relative',
    },
});

// function Transition(props) {
//   return <Slide direction="up" {...props} />;
// }

function FullScreenDialog(props) {
    //   const classes = useStyles();
    const { classes, handleClose } = props;
    //   const [open, setOpen] = React.useState(false);
    const [values, setValues] = React.useState({
        textsearch: "",
    });

    const handleChange = name => event => {
        // setValues({ ...values, [name]: event.target.value });
        setValues({ ...values, [name]: event.target.value });
    };

    const handleSelect = name => () => {
        console.log("select name:", name);
        props.history.push('/items/' + name);
    }

    console.log("textsearch:", values);

    const { items = [] } = useContext(ItemsContext);

    const textsearch = values.textsearch.toLowerCase();
    const suggestions = items.filter(value => value.name.toLowerCase().includes(textsearch)).map(suggestion => ({
        // value: suggestion.name,
        // label: suggestion.name + ` (${suggestion.percentage}%)`,
        label: suggestion.name,
        secondary: `${suggestion.bestprice.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })} (${suggestion.percentage}%)`,
        id: suggestion.id,
    }));

    //   const suggestions = items.map(suggestion => ({
    //     value: suggestion.name,
    //     label: suggestion.name + ` (${suggestion.percentage}%)`,
    //     id: suggestion.id,
    //   }));

    //   function handleClickOpen() {
    //     setOpen(true);
    //   }

    return (
        <>
            {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        open
      </Button> */}
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
                <ListItem>
                    <TextField
                        className={classes.searchText}
                        value={values.textsearch}
                        aria-label={config.searchAriaLabel}
                        autoFocus
                        fullWidth
                        onChange={handleChange('textsearch')}
                    />
                </ListItem>
                {
                    suggestions.map(item => (
                        <>
                            <ListItem button>
                                <ListItemText primary={item.label} secondary={item.secondary} onClick={handleSelect(item.id)} />
                            </ListItem>
                            <Divider />
                        </>
                    ))
                }
                {/* <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItem> */}
            </List>
            {/* </Dialog> */}
        </>
    );
}

export default withStyles(styles)(withRouter(FullScreenDialog));
// export default FullScreenDialog;

