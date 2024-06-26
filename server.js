require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { router} = require('./routes/studentRoutes')
const port = process.env.PORT;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: true}))

app.use(router)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
