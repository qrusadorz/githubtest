import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index';
import * as serviceWorker from './serviceWorker';
// import 'typeface-roboto';   // use if-no-match, when use cache.

// disable the production enviroment log
process.env.NODE_ENV !== "development" && (console.log = () => {});
// disable the production enviroment analytics
process.env.NODE_ENV === "development" && (window.gtagPageview = (path) => { /*console.log("pageview:", path);*/ });

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
// TODO ServiceWorkerを有効にする際に解除
serviceWorker.register();
