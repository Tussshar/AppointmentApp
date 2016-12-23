var React = require('react');

var ViewDetail = React.createClass({
  getInitialState: function() {

    return {

    };
  },
  handleEdit: function(){
    console.log("Inside Edir");
    this.props.onEdit(this.props.appointment.appointmentId);
  },
  handleDelete: function(){
    console.log("Inside delete");
    this.props.onDelete(this.props.appointment.appointmentId);
  },
  render: function(){

    var appointment = this.props.appointment;
    var appointmentId = appointment.appointmentId;
    var doctor = appointment.doctor.name;
    var patient = appointment.patient.name;
    var date = appointment.date;
    var time = appointment.time.time;
    var subject = appointment.subject;
    var notes = appointment.notes;

    return (
      <section className="well">
        <div className = "row">
          <div className = "col-md-6">
            <div>
              <h4>Doctor: {doctor}</h4>
            </div>
            <div>
              <h4>Patient: {patient}</h4>
            </div>
            <div>
              <h4>Date: {date}</h4>
            </div>
          </div>
          <div className = "col-md-6">
            <div>
              <h4>Time: {time}</h4>
            </div>
            <div>
              <h4>Subject: {subject}</h4>
            </div>
            <div>
              <h4>Notes: {notes}</h4>
            </div>
          </div>
          <div className = "col-md-12">>
            <button appointmentId = {appointmentId} onClick = {this.handleDelete}>Delete</button>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = ViewDetail;
