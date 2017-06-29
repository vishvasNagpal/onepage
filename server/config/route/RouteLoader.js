const fs = require('fs');
const xmlReader = require('xmlreader');
const logger = require('log4js').getLogger("config.route.routerLoader");

function callFn(obj, prop, fn){
    if(!!Object.getPrototypeOf(obj)[prop]){
        fn();
    }
}

module.exports=function(app,__rootdir){
    logger.log('i am in RouteLoader');
    const routesContent = fs.readFileSync(__rootdir + '/server/config/route/routes.xml').toString();
    xmlReader.read(routesContent,function(err,res){
        if(err){
            logger.error('error reading routes.xml')
        }else{
            const xmlRoutes = res['xml-routes'];
            xmlRoutes.route.each(function(index,route){
                let routeUrl = route["route-url"].text();
                let routeClassPath = route["route-class"].text();
                //let routeClass = require(__rootdir + '/server' + routeClassPath);
                let router = (new (requireServ(routeClassPath))());
                logger.debug("loading router:%s, class:%s", route["route-name"].text(), routeClassPath);
                if(router.constructor.name !== 'AbstractRouter'){
                    callFn(router, "init", router.init.bind(router, app));
                    callFn(router, "get", app.get.bind(app, routeUrl ,router.get.bind(router)));
                    callFn(router, "post", app.post.bind(app, routeUrl ,router.post.bind(router)));
                    callFn(router, "delete", app.delete.bind(app, routeUrl ,router.delete.bind(router)));
                }
            })
        }


    })
}