import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
// import SearchIcon from '@material-ui/icons/Search';
import ShoppingIcon from '@material-ui/icons/ShoppingCart';

import { Link } from "react-router-dom";

import config from '../configs/site'

const styles = {
    root: {
        position: 'fixed',
        bottom: 0,
        // flexGrow: 1,
        width: '100%',
    },
};

const groups = config.getGrouppaths().slice(1, 5);

function SimpleBottomNavigation(props) {
    const { classes } = props;
    const [value, setValue] = React.useState(0);

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
            {groups.map((text, index) => (
                <BottomNavigationAction key={text} label={text} component={Link} to={`/itemgroups/${text}`} icon={<ShoppingIcon />} />
            ))}
            {/* <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} /> */}
            {/* <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
        </BottomNavigation>
    );
}

export default withStyles(styles)(SimpleBottomNavigation);
