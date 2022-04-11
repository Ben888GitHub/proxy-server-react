import React, { useEffect } from 'react';
import './App.css';

function App() {
	useEffect(() => {
		// Here we implement the main API at proxy in package.json in order to enable CORS
		fetch('/jobs')
			.then((resp) => {
				console.log(resp);
				console.log('======success=======');
			})
			.catch((err) => {
				console.log('======failure=======');
				console.log(err);
			});
	}, []);

	return (
		<div className="App">
			<h1>Proxy Server usages in React</h1>
		</div>
	);
}

export default App;
