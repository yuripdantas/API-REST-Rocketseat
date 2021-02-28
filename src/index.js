const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extend: false }));
app.use(express.urlencoded({ extended: false }))

require('./app/controllers/index')(app);
// require('./controllers/index')(app);



app.listen(3000);
