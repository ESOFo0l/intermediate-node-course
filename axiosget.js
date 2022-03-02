const axios = require('axios');

axios.get('http://localhost:8000/users/621f186d9c782903b718489d').then(resp => {

    console.log(resp.data);
});
//self contained postman processes