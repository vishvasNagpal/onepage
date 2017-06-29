const AbstractRouter = requireServ('router/AbstractRouter');

class UserRouter extends AbstractRouter{
    get(req,res){
        res.render('index');
    }
}

module.exports = UserRouter;