import { Meteor } from 'meteor/meteor';
import validUrl from 'valid-url';
import {check, Match} from 'meteor/check';

Meteor.methods({
  'links.insert': function(url){
    // validation inside the meteor method
    // if validUrl returns true, true. if its false, it will throw an error
    check(url,Match.Where(url => validUrl.isUri(url)));
  }
});

Meteor.startup(() => {
  // code to run on server at startup
});
