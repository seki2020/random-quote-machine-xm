import React, { Component } from 'react'


export default class Quote extends Component {

  render() {
    return (

      <div className="card">
        <div className="card-body " id="quote-box">
          <h5 className="card-title" id="author">{this.props.data.author}
          </h5>
          <p className="card-text" id="text">{this.props.data.quote}
          </p>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-info" id="new-quote" onClick={this.props.handleNewQuote}>
              New Quote
            </button>
            <a id="tweet-quote" href="twitter.com/intent/tweet" className="btn btn-link" onClick={this.props.handleTweet}>
              Share
            </a>
          </div>
        </div>
      </div>
    )
  }
}