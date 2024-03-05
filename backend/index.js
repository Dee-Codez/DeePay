const express = require("express");
var cors = require('cors')
const bodyParser = require("body-parser")
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


var mainRoutes = require('./routes/index');

app.use('/api/v1', mainRoutes);

app.listen(3000);
