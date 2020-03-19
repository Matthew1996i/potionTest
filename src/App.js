import React from 'react';

import Home from './pages/Home'
import './App.css';

import { Provider } from 'react-redux'
import store from './store'

const App = () => {
    return(
    <>
        <Provider store={store}>
            <Home/>
        </Provider>    
    </>
)}

export default App;
