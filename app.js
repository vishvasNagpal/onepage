const express = require('express');
const app = express();
const path = require('path');
const mongodb = require('mongodb');
require("./server/config/Globals")(__dirname);

const init = require('./init');


global._app = app;
global._express = express;
global._rootDir = __dirname;

init(app);





//
//var MongoClient = mongodb.MongoClient;
//
//var dbPath = 'mongodb://localhost:27017/onepage';
//
//
//
//app.get('/', function (req, res) {
//    MongoClient.connect(dbPath,function(err,db){
//        if(err){
//            console.log('unable to connect',err)
//        }else{
//            console.log('wooooooooohhhhh');
//            var users = db.collection('users');
//            var result = users.find({}).toArray(function(err,data){
//                if(err){
//                    console.log(err);
//                    return err;
//                    MongoClient.close();
//                }
//                if(data.length){
//                    return data;
//                    MongoClient.close();
//                }
//            })
//        }
//    })
//
//    res.render('index');
//});
//
//app.get('/user',function(req,res){
//
//    var user = {
//        name:'Vishvas Nagpal',
//        position:'Sr. Software Developer',
//        introduction:"I started my career in Jan,2013 by writing HTML and CSS. But i always loved Scripting. Along with time i learnt a lots of things like JavaScipt, NodeJS, ExpressJs, ReactJS, HTML5, CSS3, SASS and all those things which comes to FrontEnd (Web/Mobile). But learning learning languages isn't enough, Understanding your requirements is one of the key things to be good coder. I always try hard to better know the requirements and then put them into the real world as optimized and compatible as possible",
//    }
//});
//
//app.get('/skills',function(req,res){
//    var skills = [
//        {id:1,type:'Frontend Technologies',value:90},
//        {id:2,type:'Scaling Applications',value:75},
//        {id:3,type:'Delegation',value:80},
//        {id:4,type:'Teamwork',value:90},
//        {id:5,type:'Mamagement',value:80},
//        {id:6,type:'Communication Skills',value:90},
//        {id:7,type:'Leadership',value:75},
//        {id:8,type:'Time Management',value:90},
//    ];
//    res.json(JSON.stringify(skills))
//});
//
//app.get('/techStack',function(req,res){
//    var techStack = {
//            primaryTech: [
//                {id: 1, type: 'JavaScript', value: 90, endorse: 1},
//                {id: 2, type: 'NodeJS', value: 75, endorse: 1},
//                {id: 3, type: 'ReactJS', value: 80, endorse: 1},
//                {id: 4, type: 'ExpressJs', value: 90, endorse: 1},
//                {id: 5, type: 'Sass', value: 80, endorse: 1},
//                {id: 6, type: 'CSS', value: 80, endorse: 1},
//                {id: 7, type: 'CSS3', value: 80, endorse: 1},
//                {id: 8, type: 'HTML', value: 80, endorse: 1},
//                {id: 9, type: 'HTML5', value: 80, endorse: 1},
//                {id: 10, type: 'JSON', value: 80, endorse: 1},
//                {id: 11, type: 'AJAX', value: 80, endorse: 1},
//            ],
//            secondaryTech: [
//                {id: 1, type: 'Jquery', value: 90, endorse: 1},
//                {id: 2, type: 'Sencha Touch', value: 80, endorse: 1},
//                {id: 3, type: 'Bootstrap', value: 75, endorse: 1},
//                {id: 4, type: 'Photoshop', value: 90, endorse: 1},
//                {id: 5, type: 'Phonegap', value: 80, endorse: 1},
//                {id: 6, type: 'Cordova', value: 80, endorse: 1},
//            ],
//            others: [
//                {id: 1, type: 'Web Development', value: 90, endorse: 1},
//                {id: 2, type: 'Mobile Applications', value: 80, endorse: 1},
//                {id: 3, type: 'Responsive Designs', value: 75, endorse: 1},
//                {id: 4, type: 'Adaptive Designs', value: 90, endorse: 1},
//                {id: 5, type: 'Mobile First', value: 90, endorse: 1},
//                {id: 6, type: 'Git', value: 80, endorse: 1}
//            ]
//        };
//
//    res.json(JSON.stringify(techStack))
//});
//
//app.get('/projects',function(req,res){
//    var projects = [
//        {
//            id:1,
//            name:'Nextag',
//            description:[
//                {id:1,value:'Nextag is a Price Comparison Engine. My Role in this project is a Frontend Developer Which includes Making the Architectural Application Design, defining the structure, Managing the data form server . It is based on technologies like Nodejs, ReactJS, ExpressJs, MVC, Sass, CSS3, ECMA6, JSON, Ajax.',}
//            ]
//        },
//        {
//            id:2,
//            name:'Hirestorm Mobile Application',
//            description:[
//                {id:1,value:'I am responsible for taking care of the front end of the application which is a price comparison engine. I use NodeJS, ReactJS, ExpressJS, HTML5, CSS3, Object oriented Javascript, Jquery, SASS, Bootstrap, Photoshop, AJAX, Json.'},
//                {id:2,value:'Technology Used: HTML, CSS, JavaScript, Jquery, Photoshop.'},
//                {id:3,value:'Responsibility: I was responsible for the whole coding and PSD to HTML conversion. Plus i contribute in photoshop designing at some level.'}
//            ]
//        },
//        {
//            id:3,
//            name:'Hirestorm Application',
//            description:[
//                {id:1, value:'Description: HireStorm is Applicant Tracking System, which offeres one solution for everything like Talent Pools, Job Posting, Social Recruiting and Agency Management.'},
//                {id:2,value:'Technology Used: HTML5, CSS3, JavaScript, Jquery, SASS, Jquery UI, Javascript Plugins, Photoshop.'},
//                {id:3,value:'Responsibility: I was responsible for the everything in frontend design and coding.'}
//            ]
//        },
//    ];
//    res.json(JSON.stringify(projects))
//});
//
//app.listen(3000, function () {
//    console.log('Example app listening on port 3000!')
//});

