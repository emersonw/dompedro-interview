const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const moment = require('moment');

const db = require('./server/config/db.js');
const routes = require('./server/src/routes/usersRoutes.js');
const clientRoutes = require('./client/src/routes/usersClientRoutes.js');

//Template
app.set('view engine', 'hbs');
app.engine( 'hbs', hbs( {
  extname: 'hbs',
  defaultView: 'default',
  helpers: {
  	formatDate: (date) => {
  		return moment(date).format('LLL')
  	}
  }
}));
app.set('views', path.join(__dirname, 'client/views/'));

//Body Parser 
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extend: false}));

//Routes
app.use(routes);
app.use(clientRoutes);

app.listen(4407)


