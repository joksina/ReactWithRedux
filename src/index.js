//get access to react
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDp8yw8o87bc7Z822sNzgrWFocoOmBJXHQ';


//create a new companents and should produce some html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] }

    YTSearch({key: API_KEY, term: 'surf'}, (videos) => {
      //this.setState({ videos: videos }); but in ES6
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

//take the component and render on the DOM page

ReactDOM.render(<App />, document.querySelector('.container'));