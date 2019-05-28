import React from 'react';
import './App.css';
import Gallery from 'react-photo-gallery';
import Lightbox from "react-images";

class Portfolio extends React.Component {

  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  // state = {
  //   currentImage: 0
  // }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    console.log("images", this.props.images)
    return (
      <div>
      {this.props.images ?
      <React.Fragment>
        <Gallery photos={this.props.images} onClick={this.openLightbox}/>
        <Lightbox images={this.props.images}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />
      </React.Fragment>
      :
      <p>loading</p>
      }
      </div>
    )
  }


}

export default Portfolio
