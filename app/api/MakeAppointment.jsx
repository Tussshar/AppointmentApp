var axios = require('axios');

const MAKE_APPOINTMENT_URL = 'http://localhost:8080/makeAppointment?';

module.exports = {
  makeAppointment: function(doctor, patient, date, time, subject, notes){

    var encodedDoctor = encodeURIComponent(doctor);
    var encodedPatient = encodeURIComponent(patient);
    var encodedDate = encodeURIComponent(date);
    var encodedTme = encodeURIComponent(time);
    var encodedSubject = encodeURIComponent(subject);
    var encodedNotes = encodeURIComponent(notes);
    var requestUrl = `${MAKE_APPOINTMENT_URL}doctor=${encodedDoctor}&patient=${encodedPatient}&date=${encodedDate}&time=${encodedTme}&subject=${encodedSubject}&notes=${encodedNotes}`;

    console.log(requestUrl);

    return axios.get(requestUrl).then(function(res){
      return res.data
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}
