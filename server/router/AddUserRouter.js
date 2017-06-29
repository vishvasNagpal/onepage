const AbstractRouter = requireServ('router/AbstractRouter');

class AddUserRouter extends AbstractRouter{
    get(req,res){
        res.render('addUser');
    }
    post(req,res){
        console.log(req);
    }
}

module.exports = AddUserRouter;