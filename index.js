import React, { Component } from 'react';
import { render } from 'react-dom';
import Quote from './Quote/Quote';
import './style.css';
import axios from 'axios'
import _ from 'lodash'


const REMOTE = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

const quoteList = []
const randomIndex = (len = 10) => {
  return _.random(len)
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      quote: '',
      author: ''
    };

    this.handleNewQuote = this.handleNewQuote.bind(this)
    this.handleTweet = this.handleTweet.bind(this)

    const self = this
    axios.get(REMOTE).then(function (response) {
      // perform setState here
      debugger
      quoteList = [...response.data.quotes]
      const quoteIndex = _.random(quoteList.length)
      self.setState(quoteList[quoteIndex])
    }).catch(function (error) {
      //Some error occurred
      cosnole.error(error)
    });
  }


  handleNewQuote() {
    const nextIndex = _.random(quoteList.length)
    this.setState(quoteList[nextIndex])
  }

  handleTweet() {
    const share = `
    https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${this.state.quote} author:${this.state.author}`
    window.open(share, '_blank')
  }

  render() {
    return (
      <div>
        <div>
          <Quote data={this.state} handleNewQuote={this.handleNewQuote} handleTweet={this.handleTweet} />
        </div>

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
