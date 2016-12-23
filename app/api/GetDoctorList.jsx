var axios = require('axios');

const GET_DOCTOR_LIST_URL = 'http://localhost:8080/getDoctorList';

module.exports = {
  getDoctorList: function(){

    return axios.get(GET_DOCTOR_LIST_URL).then(function(res){
      return res.data
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}
