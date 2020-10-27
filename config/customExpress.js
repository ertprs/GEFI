const express           = require('express');
const path	            = require('path');
const consign           = require('consign');
const bodyParser        = require('body-parser');
const cookieParser	    = require('cookie-parser');
const expressSession	= require('express-session');
const methodOverride	= require('method-override');
require("dotenv-safe").config();
const jwt               = require('jsonwebtoken');



module.exports = () => {

	var cors = require('cors');
	const app = express();

	

	app.use(cors({origin: '*'}));
	app.use(cookieParser('gefi'));
	app.use(expressSession());
	app.use(bodyParser.json())

	app.use(bodyParser.urlencoded({ extended: true }))
	app.use(methodOverride('_method'));
	
	consign()
	.include('models')
	.then('controllers')
	.into(app)




 
 return app
}