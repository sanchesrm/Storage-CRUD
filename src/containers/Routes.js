import React from 'react';
import {BrowserRouter, Router, Route} from 'react-router-dom'; 
import Navbar from './Navbar/Navbar';
import Home from './Home/Home'

const Routes = () => (
	<BrowserRouter>
		<div className="App">
			<Navbar/>
			<main className="container">
				<Route path="/" exact component={Home} />
			</main>
		</div>
	</BrowserRouter>
);

export default Routes;