import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

const key = '&api_key=dc6zaTOxFJmzC'

const url = 'http://api.giphy.com/v1/gifs/search?q='

class GifListContainer extends Component {

  state = {
    gifs: []
  }


  Search = (q) => {
    fetch(url+q+key)
    .then(r => r.json())
    .then(json => this.setState({gifs: json.data}))
  }

  componentDidMount(){
    this.Search()
  }

  SearchName = (name) => {
    this.Search(name)
  }

  render() {

    const each = this.state.gifs.map(gif => {
      return <GifList key={gif.id} gif={gif}/>
    })

    return(
      <div>
        <GifSearch SearchName={this.SearchName}/>
        {each}
      </div>
    )
  }
}

export default GifListContainer;
