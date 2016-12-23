var React = require('react');
var Welcome = require('Welcome');
var Appointment = require('Appointment');
var MakeAppointment = require('MakeAppointment');

var Home = React.createClass({

  getInitialState: function(){
    return {
      doctor:'nitin@gmail.com'
    }
  },
  handleSelect: function(doctor){

    console.log("1" + doctor);
    this.setState({
      doctor: doctor
    });
  },
  handleSubmit: function(patient, date, time, subject, notes){

    var doctor = this.state.doctor;
    console.log(doctor);
    var that = this;
/*
    console.log(date);
    console.log(patient);
    console.log(subject);
    console.log(notes);
    console.log(doctor);
    console.log(time);
*/
    MakeAppointment.makeAppointment(doctor, patient, date, time, subject, notes).then(function (temp){
      alert('Appointment saved');
      }, function(errorMessage){
        alert(errorMessage);
      });
  },
  render: function(){
    var {doctor} = this.state;
    return (
      <div className="container">
        <article>
          <h3>Home Component</h3>
          <Welcome onSelect={this.handleSelect}/>
          <Appointment doctor={doctor} onSubmit={this.handleSubmit}/>
        </article>
      </div>
    );
  }
});

module.exports = Home;
