import React from 'react';
import './App.css';

class Portfolio extends React.Component {

  state = {
    image: ""
  }

  postImageURL = () => {
    if (this.state.uploaded === true) {
      const image = {imageURL: this.state.image, user_id: this.props.currentUser.id}
      fetch(`http://localhost:3000/images`, {
        method: 'POST',
        body: JSON.stringify(image),
        headers:{
          'Content-Type': 'application/json'
        }
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
    console.log(this.state.image)
    return (
      <div className="portfolio">
        <button onClick={this.openWidget} id="upload_widget" className="cloudinary-button">Upload files</button>
      </div>
    )
  }

}

export default Portfolio
