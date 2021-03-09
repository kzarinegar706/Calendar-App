const express = require('express');
const app = express();
const {google} = require('googleapis');

//Define client info from google developer console
const CLIENT_ID = '529172822033-sal4ek3c8hp9gqn9cvfn0ru81qm1cfks.apps.googleusercontent.com';
const CLIENT_SECRET = '6WyY2_X-w_SZzbt509hO8KDv';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04zlSfMkoNuSvCgYIARAAGAQSNwF-L9IrXtjeKoteMeD7nDs_j6ZFLOFgOIpJ9ejZdj6NyYbwMXGFmVicKbsBNH4o3CPoUHmaIdw';

//Using google object create and POPULATE authentication code
const OAuth2client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
OAuth2client.setCredentials({refresh_token: REFRESH_TOKEN});

//GET
app.get('/', (req, res) => {
    res.send("GET");
});
//POST
app.post('/', (req, res) => {
    res.send("POST");
});
//Listening Port
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});