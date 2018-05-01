import React, {Component} from 'react'

class GifSearch extends Component{

  state = {
    gif: ''
  }

  handleInput = e => {
    this.setState({gif: e.target.value})
  }

  handleSubmit = e => {
    this.props.SearchName(this.state.gif)
    e.preventDefault()
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input onChange={this.handleInput}/>
          </label>
          <button>Submit</button>
        </form>
      </div>
    )
  }

}


export default GifSearch;
