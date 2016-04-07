//get access to react
import React from 'react';
import ReactDOM from 'react-dom'

//create a new companents and should produce some html
const App =  () => {
  // body...
  return <div>HI World!</div>;
};

//take the component and render on the DOM page

ReactDOM.render(<App />, document.querySelector('.container'));