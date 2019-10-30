import React from 'react';
import './App.css';
import Page from './Components/Page';
import pizzas from './data';

export default function App() {
    return (
        <Page initData={pizzas}/>
    );
}