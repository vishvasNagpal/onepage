const path = require('path');
const hbs = require('hbs');
const routeLoader = requireServ('config/route/RouteLoader');
const mongoose = require('mongoose');

module.exports = function(app){
    app.use(_express.static(path.join(__rootDir, 'public')));
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'hbs');
    hbs.registerPartials(path.join(__dirname, 'views', 'common'));
    routeLoader(app,_rootDir);
    bootstarpDB();
    bootstrap(app);
};
function bootstarpDB (){
    mongoose.connect('mongodb://localhost:27017/onepage');
}
function bootstrap(app){
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;

        res.json({err: err, message: 'page not found!'});
        next();
    });
    app.listen('3000',function(){
        console.log('listening to port 3000');
    });
}