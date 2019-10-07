import React from 'react';
import './App.css';
import Page from './Page';
import posts from './data';

const App = () => {
    return (
        <Page posts={posts}/>
    );
}

export default App;