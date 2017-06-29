const AbstractRouter = requireServ('router/AbstractRouter');
const mongoose = require('mongoose');
const UsersModel = requireServ('models/UsersModel');
const logger = require('log4js').getLogger('router.UserInfoRouter');
class UserInfoRouter extends AbstractRouter {
    get(req,res){
        //mongoose.model('users',{name:String});
        UsersModel.find({name:req.query.user},function(err,result){
            if(err){
                logger.warn(err.message);
            }else if(result.length){
                res.json(result)
            }else{
                res.json({err:{message:'no result found'}});
            }

        })
    }
}

module.exports = UserInfoRouter;