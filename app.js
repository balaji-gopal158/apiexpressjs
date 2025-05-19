const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const adminRouteurl = require('./routes/adminroutes')

app.use(bodyParser.urlencoded())



app.use(adminRouteurl)



app.listen(4000);

