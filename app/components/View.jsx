var React = require('react');
var Welcome = require('Welcome');
var ViewDetail = require('ViewDetail');
var GetDoctorsAppointmentDetail = require('GetDoctorsAppointment');
var DeleteAppointment = require('DeleteAppointment');
var Appointment = require('Appointment');

var View = React.createClass({

  getInitialState: function(){
    return {
      doctor:'nitin@gmail.com'
    }
  },
  handleSelect: function(doctor){
    console.log(doctor);
    var doctor = doctor;
    this.setState({
      doctor: doctor
    });

    var that = this;
    //console.log(that.state.doctor);
    GetDoctorsAppointmentDetail.getDoctorsAppointmentDetail(doctor).then(function (temp){

      console.log(temp);

      that.setState({
      appointmentList: temp
    })
      }, function(errorMessage){
        alert(errorMessage);
      });
  },
  handleEdit: function(appointmentId){
    console.log("Inside Edit");
    console.log(appointmentId);
    <Appointment doctor={this.state.doctor} />
  },
  handleDelete: function(appointmentId){

    var that = this;
    DeleteAppointment.deleteAppointment(appointmentId).then(function (temp){

      alert("Appointment Deleted Successfully");
      }, function(errorMessage){
        alert(errorMessage);
      });

        that.handleSelect(that.state.doctor);
  },
  render: function(){
    var {doctor} = this.state;

    var listAppointments = () => {
      let items =[];

      var list = this.state.appointmentList;

      var that = this;

      if(list != undefined){
        list.forEach(function(d){
          items.push(<ViewDetail appointment={d} onEdit={that.handleEdit} onDelete={that.handleDelete}/>);
        });
      }

      return items;
    };

    return (
      <div className="container">
        <article>
          <h3>View Component</h3>
          <Welcome onSelect={this.handleSelect}/>
          {listAppointments()}
        </article>
      </div>
    );
  }
});

module.exports = View;
