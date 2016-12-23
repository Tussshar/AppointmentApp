var React = require('react');
var GetDoctorList = require('GetDoctorList');

require('../../node_modules/jquery/dist/jquery.js');
require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../../node_modules/bootstrap/dist/js/bootstrap.js');


var Welcome = React.createClass({

  getInitialState: function(){
    var that = this;
    var list;

    GetDoctorList.getDoctorList().then(function (temp){
      that.setState({
      doctorList: temp
    })
      }, function(errorMessage){
        alert(errorMessage);
      });

    return {
      doctorList: []
    }
  },
  onFormSubmit: function(e){
    e.preventDefault();

    var doctor = this.refs.doctor.value;

    this.props.onSelect(doctor);
  },
  render: function(){

    //var data = ['one', 'Two', 'Three';

    var list = this.state.doctorList;

    var createDoctors = () => {
      let items =[];

      list.forEach(function(d){
        items.push(<option value={d.emailAddress}>{d.name}</option>);
      });

      return items;
    };

    return (
      <section className="well">
        <div className = "row">
          <div className = "col-sm-12">
            <div>
              <h3>Welcome to Appointment App</h3>
              <p>Please select a doctor</p>
              <form onSubmit={this.onFormSubmit}>
                <div>
                  <select ref="doctor">
                    {createDoctors()}
                  </select>
                </div>
                <div>
                    <button>Select</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = Welcome;
