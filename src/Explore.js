import React from 'react';
import Nav from './Nav'
import Gallery from 'react-photo-gallery';
import Lightbox from "react-image-lightbox";

const photos = [
  {
    src: "https://source.unsplash.com/EOnlL3L3IgQ/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/UuoovtKdlLA/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/_aE8ainPt7M/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/vpHCfunwDrQ/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/r1nxlNo-v4I/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/Uu2FsN_8r88/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/2A95bKGQmXY/600x799",
    width: 3,
    height: 4
  },
 {
   src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
   width: 800,
   height: 600
 },
 {
   src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
   width: 4,
   height: 3
 },
 {
   src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
   width: 3,
   height: 4
 },
 {
   src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
   width: 3,
   height: 4
 },
 {
   src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
   width: 3,
   height: 4
 },
 {
   src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
   width: 4,
   height: 3
 },
 {
   src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
   width: 3,
   height: 4
 },
 {
   src: "https://source.unsplash.com/PpOHJezOalU/800x599",
   width: 4,
   height: 3
 },
 {
   src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
   width: 4,
   height: 3
 }
]

class Technology extends React.Component {

  state = {
    images: []
  }

  getAllImages = () => {
    fetch('http://localhost:3000/images')
    .then(res => res.json())
    .then(response => {
        this.setState ({
          images: response
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
          <Gallery photos={photos} />
        </div>
        <div className="explore-right-main">
          <Nav signOut={this.props.signOut}/>
        </div>
      </div>
    )
  }


}

export default Technology;
