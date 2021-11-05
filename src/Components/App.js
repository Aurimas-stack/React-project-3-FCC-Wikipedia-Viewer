import React from 'react';
import './App.css';
import searchWiki from '../util/wiki';
import WikiEntries from './WikiEntries/WikiEntries';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchIcon: false,
      text: '',
      wikiEntries: [],
    }
  }
  handleTextChange = event => {
    this.setState({
        text: event.target.value.replace(/\s/g, '%20')
    })
}
  handleEnterPress = event => {
    let searchTerm = this.state.text;
    if(event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      searchWiki.getEntries(searchTerm).then((query) => {
        this.setState({wikiEntries: query})
      })
    }
  }
  hideInputArea = event => {
    if(this.state.searchIcon === true) {
      this.setState({
        searchIcon: false,
        wikiEntries: []
      })
    }
    event.preventDefault();
  }
  showInputArea = event => {
    if(this.state.searchIcon === false) {
      this.setState({searchIcon: true})
    } 
    event.preventDefault();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleEnterPress);
  }
  componentWillUnmount() {
   document.removeEventListener("keydown", this.handleEnterPress);
  }
  render() {
    return (
      <div className="App">
        <div className='App-container'>
          <a className='search-random' href='https://en.wikipedia.org/wiki/Special:Random' 
          target="_blank" rel="noreferrer noopener">Click here for a random article</a>
          {
            this.state.searchIcon === true ?
            <div className='input-container'>
              <input className='search-input' type='text' placeholder='Search here...' onChange={this.handleTextChange} onKeyDown={this.handleEnterPress}/>
              <i className="far fa-window-close fa-2x"  onClick={this.hideInputArea}></i>
            </div> :
            <div className='search-icon'>
              <i className="fas fa-search fa-4x" onClick={this.showInputArea}></i>
              <p className='searchIcon-text'>Click Icon To Search</p>
            </div>
          }
          <WikiEntries wikiEntries={this.state.wikiEntries}/>
        </div>
      </div>
    );
  }
}

export default App;
