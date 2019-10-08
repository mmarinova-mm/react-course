import React from 'react';
import './App.css';
import Page from './Page.tsx';
import posts from './data';

const App = () => {
    return (
        <Page initPosts={posts}/>
    );
}

export default App;