var React = require('react');
var DatePicker = require('react-datepicker');
var moment = require('moment');
var GetPatientList = require('GetPatientList');
var GetTimeSlotList = require('GetTimeSlotList');

require('../../node_modules/react-datepicker/dist/react-datepicker.css');

var Appointment = React.createClass({

  getInitialState: function() {

    var that = this;

    GetPatientList.getPatientList().then(function (temp){
      that.setState({
      patientList: temp
    })
      }, function(errorMessage){
        alert(errorMessage);
      });

    return {
      startDate: moment(),
      patientList: [],
      timeSlotList: [],
    };
  },

  handleChange: function(date) {
    this.setState({
      startDate: date
    });

    var doctor = this.state.doctor;
    var date = this.state.startDate;
    var that = this;

    GetTimeSlotList.getTimeSlotList(doctor, date).then(function (temp){
      that.setState({
      timeSlotList: temp
    })
      }, function(errorMessage){
        alert(errorMessage);
      });
  },
  handleChangeInTime: function(time) {
    this.setState({
      time: time
    });
  },
  onFormSubmit: function(e){
    e.preventDefault();

    var date = moment(this.state.startDate).format('MM/DD/YYYY');
    var patient = this.refs.patient.value;
    var subject = this.refs.subject.value;
    var notes = this.refs.notes.value;
    var time = this.refs.time.value;

    this.props.onSubmit(patient, date, time, subject, notes);
  },
  render: function(){

    var list = this.state.patientList;
    var timeSlotList = this.state.timeSlotList;

    var createPatients = () => {
      let items =[];

      list.forEach(function(d){
        items.push(<option value={d.emailAddress}>{d.name}</option>);
      });

      return items;
    };

    var createTimeSlots = () => {
      let items =[];

      timeSlotList.forEach(function(d){
        items.push(<option value={d.timeSlotId}>{d.time}</option>);
      });

      return items;
    };

    var {doctor} = this.props;
    this.state.doctor = this.props;

    return (
      <section className = "well">
        <div className = "row">
          <h3>Make an Appointment</h3>
            <form onSubmit={this.onFormSubmit}>
              <div className = "col-md-6">
                <div>
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    ref="date"
                  />
                </div>
                <div>
                  <select ref="patient">
                    {createPatients()}
                  </select>
                </div>
                <div>
                  <select ref="time">
                    {createTimeSlots()}
                  </select>
                </div>
              </div>
              <div className = "col-md-6">
                <div>
                  <label>Subject</label>
                  <input type="text" name = "subject" placeholder = "Subject" ref = "subject"/>
                </div>
                <div>
                  <label>Notes</label>
                    <textarea name="notes" placeholder="Notes" ref = "notes"></textarea>
                </div>
              </div>
              <div className = "col-md-12">
                <button>Submit</button>
              </div>
            </form>
        </div>
      </section>
    );
  }
});

module.exports = Appointment;
