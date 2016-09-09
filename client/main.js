import React from 'react';
import ReactDOM from 'react-dom';
import LinkCreate from './components/link_create';
import { Links } from '../imports/collections/links';
import LinkList from './components/link_list';

const App = () =>{
  return(
    <div>
      <LinkCreate />
      <LinkList />
    </div>
  );
};

Meteor.startup(() =>{
  ReactDOM.render(<App />, document.querySelector(".render-target"));
});
