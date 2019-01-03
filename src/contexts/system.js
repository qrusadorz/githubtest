import React from 'react';

export const SystemContext = React.createContext({
    // snackbar
    snackbarMessage: "",
    updateSnackbarMessage: () => { },
    // drawer
    drawerOpen: false,
    openDrawer: () => { },
    closeDrawer: () => { },
});

export default SystemContext;