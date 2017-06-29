class AbstractRouter {
    init (app){
        return app;
    }
    get(req,res){
        return {req:req,res:res};
    }
    post(req,res){
        return {req:req,res:res};
    }
    delete(req,res){
        return {req:req,res:res};
    }
}

module.exports = AbstractRouter;