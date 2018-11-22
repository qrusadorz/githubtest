import React from 'react';

export const SystemContext = React.createContext({
    snackbarMessage: "",
    updateSnackbarMessage: () => { },
});

export default SystemContext;