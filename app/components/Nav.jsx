var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function(){
    return (
      <div>
        <h2>Nav Components</h2>

        <IndexLink to="/" acticeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink>
        <Link to="/view" acticeClassName="active" activeStyle={{fontWeight: 'bold'}}>View Appointments</Link>
      </div>
    );
  }
});

module.exports = Nav;
