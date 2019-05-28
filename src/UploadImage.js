import React from 'react';
import './App.css';

class UploadImage extends React.Component {

  state = {
    image: ""
  }

  getMeta(url, callback) {
    var img = new Image();
    img.src = url;
    img.onload = function() { callback(this.width, this.height); }
  }

  postImageURL = () => {
    if (this.state.uploaded === true) {
      this.getMeta(this.state.image, (width, height) => {
        const image = {src: this.state.image, user_id: this.props.currentUser.id, width, height}
        fetch(`http://localhost:3000/images`, {
          method: 'POST',
          body: JSON.stringify(image),
          headers:{
            'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(() => {
          this.props.addImageToState(image)
        })
      })

    }
  }

  openWidget = () => {
    window.cloudinary.createUploadWidget(
      {
        cloudName: "jesshuy12",
        uploadPreset: "i1up9hwj",
      },
      (error, result) => {
        if (result && result.event === "success") {
          this.setState ({
            image: `https://res.cloudinary.com/${"jesshuy12"}/image/upload/${result.info.path}`, uploaded: true
          }, () => {
            this.postImageURL()
          })
        }
      }
    ).open()
  }

  render() {
    return (
      <div className="portfolio">
        <button onClick={this.openWidget} id="upload_widget" className="ui button">Upload Images</button>
      </div>
    )
  }

}

export default UploadImage
