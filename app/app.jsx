var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Home = require('Home');
var View = require('View');

ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path="/" component={Main}>
      <Route path = "view" component={View}/>
      <IndexRoute component={Home}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
