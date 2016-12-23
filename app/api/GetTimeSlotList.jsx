var axios = require('axios');

const GET_TIME_SLOT_LIST_URL = 'http://localhost:8080/getTimeSlotList?';

module.exports = {
  getTimeSlotList: function(doctor, date){

    var encodedDoctor = encodeURIComponent(doctor);
    var encodedDate = encodeURIComponent(date);

    var requestUrl = `${GET_TIME_SLOT_LIST_URL}doctor=${encodedDoctor}&date=${encodedDate}`;

    console.log(requestUrl);

    return axios.get(requestUrl).then(function(res){
      return res.data
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}
