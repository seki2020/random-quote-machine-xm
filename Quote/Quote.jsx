import React,{Component} from 'react'

export default class Quote extends Component{

  render(){
    return (
      <div id="quote-box">
        <div>
            <h1 id="text">{this.props.data.text}</h1>
            <div id="author">{this.props.data.author}</div>
        </div>  
        <div className="footer">
          <button id="new-quote" onClick={this.props.handleNewQuote}>new</button>
          <a id="tweet-quote" onClick={this.props.handleTweet}>tweet</a>
        </div>
    </div>
    )
  }
}