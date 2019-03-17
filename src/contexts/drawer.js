import React from 'react';

export const DrawerContext = React.createContext({
    drawerOpen: false,
    openDrawer: () => { },
    closeDrawer: () => { },
});

export default DrawerContext;