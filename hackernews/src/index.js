import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import AppCardList from './ReactJS-GettingStarted';
import App2 from './ReactJS-GettingStarted';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render( <App2 /> , document.getElementById('root'));





//	ReactDOM.render( <AppCardList/> , document.getElementById('root'));
// ReactDOM.render(<h1>Hello React World</h1> , document.getElementById('root1'));

if (module.hot) {
	module.hot.accept();
}

registerServiceWorker();


