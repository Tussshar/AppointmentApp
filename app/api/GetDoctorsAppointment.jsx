var axios = require('axios');

const GET_DOCTORS_APPOINTMENT_DETAIL_URL = 'http://localhost:8080/getDoctorsAppointmentDetail?';

module.exports = {
  getDoctorsAppointmentDetail: function(doctor){
    
    var encodedDoctor = encodeURIComponent(doctor);

    var requestUrl = `${GET_DOCTORS_APPOINTMENT_DETAIL_URL}doctor=${encodedDoctor}`;

    return axios.get(requestUrl).then(function(res){
      return res.data
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}
