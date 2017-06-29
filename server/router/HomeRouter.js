const AbstractRouter = require('./AbstractRouter');

class HomeRouter extends AbstractRouter{
    get(req,res){

        res.render('index');
    }
}

module.exports = HomeRouter;