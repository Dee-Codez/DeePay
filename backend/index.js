const express = require("express");
var cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

var mainRoutes = require('./routes/index');

app.use('/api/v1', mainRoutes);

app.listen(3000);
