'use strict';
// ----------  installation
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// ----------  routes
const loginRoutes = require('./routes/login');
const aboutRoutes = require('./routes/about');
const homeRoutes = require('./routes/home');
const registerRoutes = require('./routes/register');
const logoutRoutes = require('./routes/logout');
const roomRouters = require('./routes/room');
// ----------  middlewears
const varMiddlewear = require('./middlewears/variables');

const app = express();

// ----------  Engine
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

// ----------  Middlewears
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'some secret', 
    resave: false, 
    saveUninitialized: false
}));
app.use(varMiddlewear);

// ----------  Routes
app.use(homeRoutes);    // --> '/'
app.use(loginRoutes);   // --> '/login'
app.use(logoutRoutes);  // --> '/logout'
app.use(aboutRoutes);   // --> '/about'
app.use(registerRoutes);// --> '/register'
app.use(roomRouters);   // --> '/room'



app.listen(3030, ()=>{
    console.log('server is running on path 3030');
});
