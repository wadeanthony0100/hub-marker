import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

window.onload = () =>  {
	ReactDOM.render(
    <Header username='wad'></Header>
    ,document.getElementById('app')
	);
};
