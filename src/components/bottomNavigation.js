import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
// import SearchIcon from '@material-ui/icons/Search';
import SettingIcon from '@material-ui/icons/Settings';
import ShoppingIcon from '@material-ui/icons/ShoppingCart';

import { Link } from "react-router-dom";

import config from '../configs/site'

import { groups } from '../contexts/items';

const styles = {
    root: {
        position: 'fixed',
        bottom: 0,
        // flexGrow: 1,
        width: '100%',
    },
};

// const groups = config.getGrouppaths().slice(1, 5);

function SimpleBottomNavigation(props) {
    const { classes } = props;
    const [value, setValue] = React.useState(0);

    console.log("render() SimpleBottomNavigation");

    // TODO 暫定で毎回取得 => 将来的になくなるのでこれでOK
    const actions = config.getGrouppaths(groups).slice(2, 3);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                console.log('newValue:', newValue);
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
            position="fixed"
        >
            <BottomNavigationAction label="Home" key='Home' component={Link} to={`/`} icon={<HomeIcon />} />
            <BottomNavigationAction label="Favorite" key='Favorite' component={Link} to={`/itemgroups/favorite`}  icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Settings" key='Settings' component={Link} to={`/settings`}  icon={<SettingIcon />} />
            {actions.map((text, index) => (
                <BottomNavigationAction key={text} label={text} component={Link} to={`/itemgroups/${text.toLowerCase()}`} icon={<ShoppingIcon />} />
            ))}
            {/* <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
        </BottomNavigation>
    );
}

export default withStyles(styles)(SimpleBottomNavigation);
