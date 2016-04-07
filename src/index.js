//get access to react
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDp8yw8o87bc7Z822sNzgrWFocoOmBJXHQ';

//create a new companents and should produce some html
const App =  () => {
  // body...
  return (
    <div>
      <SearchBar />
    </div>
  )
};

//take the component and render on the DOM page

ReactDOM.render(<App />, document.querySelector('.container'));