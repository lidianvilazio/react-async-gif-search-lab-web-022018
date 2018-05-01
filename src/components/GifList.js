import React from 'react'

const GifList = (props) => {
  return(

    <div>
      <h1>{props.gif.title}</h1>
      <img src={props.gif.images.downsized_medium.url}/>
    </div>
  )
}

export default GifList;
