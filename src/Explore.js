import React from 'react';
import Nav from './Nav'
import Gallery from 'react-photo-gallery';
import Lightbox from "react-image-lightbox";

class Technology extends React.Component {

  state = {
    images: []
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

  render() {
    console.log(this.state.images)
    return(
      <div className="explore-page">
        <div className="explore-left-main">
          <h2 className="portfolio-text">EXPLORE</h2>
          <Gallery photos={this.state.images} />
        </div>
        <div className="explore-right-main">
          <Nav signOut={this.props.signOut}/>
        </div>
      </div>
    )
  }


}

export default Technology;
