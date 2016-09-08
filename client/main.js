import React from 'react';
import ReactDOM from 'react-dom';
import LinkCreate from './components/link_create';

const App = () =>{
  return(
    <div>
      <LinkCreate />
    </div>
  );
};

Meteor.startup(() =>{
  ReactDOM.render(<App />, document.querySelector(".render-target"));
});
