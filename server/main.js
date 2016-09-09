import { Meteor } from 'meteor/meteor';
import validUrl from 'valid-url';
import {check, Match} from 'meteor/check';
import {Links} from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';
Meteor.methods({
  'links.insert': function(url){
    // validation inside the meteor method
    // if validUrl returns true, true. if its false, it will throw an error
    check(url,Match.Where(url => validUrl.isUri(url)));

    // Generate a short token
    const token = Math.random().toString(36).slice(-5);
    Links.insert({url,token,clicks:0});
  }
});

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('links',function(){
    return Links.find({});
  });
});

function onRoute(req,res,next){
  const link  = Links.findOne({token: req.params.token});

  if(link){
    res.writeHead(307,{'Location':link.url});
    res.end();
  } else{

  }
}

const middleware = ConnectRoute(function(router){
  router.get('/:token',onRoute); //(req) => console.log(req)
});
WebApp.connectHandlers.use(middleware);
