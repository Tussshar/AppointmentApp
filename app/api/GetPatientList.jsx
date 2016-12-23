var axios = require('axios');

const GET_PERSON_LIST_URL = 'http://localhost:8080/getPatientList';

module.exports = {
  getPatientList: function(){

    return axios.get(GET_PERSON_LIST_URL).then(function(res){
      return res.data
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}
