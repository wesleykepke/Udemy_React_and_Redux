import React, { Component } from 'react'; // for creating and managing components
import ReactDOM from 'react-dom'; // for rendering to the DOM
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "AIzaSyCb5C39mnDx1iGJQrCM2lS63OazpgCXlFQ";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      //this.setState({ videos: videos });
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  // passing prop 'videos' to VideoList
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
