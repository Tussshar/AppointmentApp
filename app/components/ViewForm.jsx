var React = require('react');

require('../../node_modules/jquery/dist/jquery.js');
require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../../node_modules/bootstrap/dist/js/bootstrap.js');

var ViewForm = React.createClass({

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

module.exports = ViewForm;
