var axios = require('axios');

const DELETE_APPOINTMENT_URL = 'http://localhost:8080/deleteAppointment?';

module.exports = {
  deleteAppointment: function(appointmentId){

    var encodedDoctor = encodeURIComponent(appointmentId);

    var requestUrl = `${DELETE_APPOINTMENT_URL}appointmentId=${encodedDoctor}`;

    return axios.get(requestUrl).then(function(res){
      return res.data
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}
