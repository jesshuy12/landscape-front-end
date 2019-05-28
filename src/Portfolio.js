import React from 'react';
import './App.css';
import Gallery from 'react-photo-gallery';
import Lightbox from "react-image-lightbox";

class Portfolio extends React.Component {

  render() {
    console.log("images", this.props.images)
    return (
      <div>
      {this.props.images ?
      <Gallery photos={this.props.images}/>
      :
      <p>loading</p>
      }
      </div>
    )
  }


}

export default Portfolio
