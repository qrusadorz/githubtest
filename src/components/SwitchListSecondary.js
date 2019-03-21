import React from 'react';
// import { makeStyles } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
// import WifiIcon from '@material-ui/icons/Wifi';
// import BluetoothIcon from '@material-ui/icons/Bluetooth';
import GigaIcon from '@material-ui/icons/DirectionsRun';

import { setToLocalStorage, getFromLocalStorage } from '../utils/localstorage';

// const useStyles = makeStyles(theme => ({
const styles = theme => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});
// }));

// TODO 重複するためどこかにまとめる必要がある
const getSettingsFromLocalStorage = () => getFromLocalStorage('settings');

function SwitchListSecondary(props) {
    //   const classes = useStyles();
    const { classes } = props;
    const [setting, setSetting] = React.useState(() => getSettingsFromLocalStorage());

    const handleToggle = key => () => {
        // const currentIndex = checked.indexOf(value);
        // const newChecked = [...checked];

        // const on = currentIndex === -1;
        // if (on) {
        //     newChecked.push(value);
        // } else {
        //     newChecked.splice(currentIndex, 1);
        // }

        // setChecked(newChecked);

        const newValue = !setting[key];
        setting[key] = newValue;
        setSetting(prev => ({...prev, key: newValue }));
        // store to LocalStorage
        setToLocalStorage('settings', setting);
    };

    return (
        <List subheader={<ListSubheader>Settings</ListSubheader>} className={classes.root}>
            <ListItem>
                <ListItemIcon>
                    <GigaIcon />
                </ListItemIcon>
                <ListItemText primary="軽快＆ギガ節約モード" secondary="画像を読み込まないことでギガを節約し、動作を軽快にします。" />
                <ListItemSecondaryAction>
                    <Switch onChange={handleToggle('lightrun')} checked={setting['lightrun']} />
                </ListItemSecondaryAction>
            </ListItem>
            {/* <ListItem>
                <ListItemIcon>
                    <BluetoothIcon />
                </ListItemIcon>
                <ListItemText primary="Bluetooth" />
                <ListItemSecondaryAction>
                    <Switch onChange={handleToggle('bluetooth')} checked={checked.indexOf('bluetooth') !== -1}
                    />
                </ListItemSecondaryAction>
            </ListItem> */}
        </List>
    );
}

// export default SwitchListSecondary;
export default withStyles(styles)(SwitchListSecondary);
