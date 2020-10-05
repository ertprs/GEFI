const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
var cors = require('cors');

module.exports = () => {

 const app = express()
 app.use(cors({origin: '*'}));
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({ extended: true }))

 consign()
   .include('controllers')
   .into(app)
 
 return app
}