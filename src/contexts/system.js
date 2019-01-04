import React from 'react';

export const SystemContext = React.createContext({
    // login 
    login: () => { },
    logout: () => { },
    // snackbar
    snackbarMessage: "",
    updateSnackbarMessage: () => { },
    // drawer
    drawerOpen: false,
    openDrawer: () => { },
    closeDrawer: () => { },
});

export default SystemContext;