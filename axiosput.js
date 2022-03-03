const axios = require('axios')
axios.put(
  'http://localhost:8000/users/621f186d9c782903b718489d',
  {
     "newData":{
    "name":"Jim",
    "email":"jim@email.com",
    "password":"newPassword"
  }
  }
);