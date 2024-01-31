import React, { Component } from 'react'
import { Badge } from 'react-bootstrap'
import { marked } from 'marked'


export class App extends Component {
  state={
    markdown: ''
  }
  componentDidMount(){
    this.setState({
      markdown: '<h1>this</h1><h2>another</h2><a>link</a><li>item</li><img style="width: 100px" src="https://cdn.vectorstock.com/i/1000x1000/20/38/hand-making-small-heart-sign-vector-28932038.webp"></img><b>bold</b><blockquote>quote</blockquote><pre><code>code</code></pre><code>morecode</code>'
    })
    
  }
  updateMarkdown=(e)=>{
    this.setState({markdown: e.target.value})
  }
  onFocus=(e)=>{
    this.setState({
      markdown: ''
    })
  }
  render() {
    var inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };
    var outputStyle = {
      width: "400px",
      height: "50vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };
    

    

    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                {' '}
                <Badge className="text-align-center" variant="light">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              {' '}
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Markdown Input
                  </Badge>
                </h4>
              </div>
              <div className="input" style={inputStyle}>
                <textarea
                onFocus={this.onFocus}
                  id='editor'
                  className="input"
                  style={inputStyle}
                  value={this.state.markdown}
                  onChange={this.updateMarkdown}
                >
                  {" "}
                  {console.log(this.state.markdown)}
                </textarea>
              </div>
            </div>

            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Preview
                  </Badge>
                </h4>
              </div>
              <div id='preview' style={outputStyle} dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App
