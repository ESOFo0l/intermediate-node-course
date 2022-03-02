const axios = require('axios')

axios.post('http://localhost:8000/users', {
    "newData":{
    "name":"Jim",
    "email":"jim@email.com",
    "password":"secretPassword"
  }
  })
  .then(function (response) {
    console.log(response);
  })
//self contained postman processes