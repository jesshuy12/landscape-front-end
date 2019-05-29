import React from 'react';
import Nav from './Nav'
import Gallery from 'react-photo-gallery';
import Lightbox from "react-images";

class Technology extends React.Component {

  constructor() {
    super();
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  state = {
    images: [],
    currentImage: 0
  }

  shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  getAllImages = () => {
    fetch('http://localhost:3000/images')
    .then(res => res.json())
    .then(response => {
        const shuffled = this.shuffle(response)
        this.setState ({
          images: shuffled
        })
      })
  }

  componentDidMount() {
    this.getAllImages()
  }

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
    return(
      <div className="explore-page">
        <div className="explore-left-main">
          <h2 className="portfolio-text">EXPLORE</h2>
          <Gallery photos={this.state.images} onClick={this.openLightbox}/>
          <Lightbox images={this.state.images}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
            />
        </div>
        <div className="explore-right-main">
          <Nav signOut={this.props.signOut}/>
        </div>
      </div>
    )
  }


}

export default Technology;
