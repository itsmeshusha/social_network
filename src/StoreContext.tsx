import { StoreReduxType }  from './redux/redux-store';
import React from 'react';

const StoreContext = React.createContext({} as StoreReduxType);

export default StoreContext;