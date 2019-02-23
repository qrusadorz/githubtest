import React from 'react';

export const SystemContext = React.createContext({
    login: () => { },
    logout: () => { },
});

export default SystemContext;