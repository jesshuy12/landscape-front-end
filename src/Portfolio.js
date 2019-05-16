import React from 'react';
import './App.css';

class Portfolio extends React.Component {

  state = {
    imageURL: ""
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
          })
        }

      }
    ).open()
  }

  render() {
    console.log(this.state)
    return (
      <div className="portfolio">
        <button onClick={this.openWidget} id="upload_widget" class="cloudinary-button">Upload files</button>
      </div>
    )
  }

}

export default Portfolio
