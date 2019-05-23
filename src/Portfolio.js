import React from 'react';
import './App.css';
import Gallery from 'react-photo-gallery';
import Lightbox from "react-image-lightbox";

const photos = [
 {
   src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",

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

let newArray = photos.map(photo => {
  return photo.src
})

class Portfolio extends React.Component {

  state = {
    photoIndex: 0,
    isOpen: false,
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
      <Gallery photos={photos} onClick={() => this.setState({ isOpen: true })}/>

      {isOpen && (
          <Lightbox
            mainSrc={newArray[photoIndex]}
            nextSrc={newArray[(photoIndex + 1) % newArray.length]}
            prevSrc={newArray[(photoIndex + newArray.length - 1) % newArray.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + newArray.length - 1) % newArray.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % newArray.length,
              })
            }
          />
        )
      }
      </div>
    )
  }


}

export default Portfolio
