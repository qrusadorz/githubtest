import React from 'react';

export const SnackbarContext = React.createContext({
    snackbarMessage: "",
    updateSnackbarMessage: () => { },
});

export default SnackbarContext;