import React from 'react';
import './App.css';
import { Button, Checkbox, Form, Input, Select, TextArea } from 'semantic-ui-react'

const options = [
  { text: 'New York, NY', value: 'New York, NY' },
  { text: 'Boston, MA', value: 'Boston, MA' },
  { text: 'San Diego, CA', value: 'San Diego, CA' },
]

class Signup extends React.Component {

  state = {
    name: "",
    username: "",
    password: "",
    location: "",
    instagram_handle: "",
    follower_count: "",
    email: "",
    skill: [],
    avatar: null
  }

  handleChange = (e) => {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  locationChange = (e,v) => {
    this.setState ({
      location: v.value
    })
  }

  skillHandleChange = (e,v) => {
    this.setState ({
      skill: [...this.state.skill, v.value]
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let formData = new FormData()
    formData.append('name', this.state.name)
    formData.append('username', this.state.username)
    formData.append('password', this.state.password)
    formData.append('location', this.state.location)
    formData.append('instagram_handle', this.state.instagram_handle)
    formData.append('follower_count', this.state.follower_count)
    formData.append('email', this.state.email)
    formData.append('avatar', this.state.avatar)

    for (const skill of this.state.skill) {
      formData.append('skill[]', skill)
    }

    this.props.createUser(formData)
    this.setState ({
      name: "",
      username: "",
      password: "",
      location: "",
      instagram_handle: "",
      follower_count: "",
      email: "",
      skill: [],
      avatar: null
    })
  }

  openfileDialog = (e) => {
    ("#fileLoader").click();
  }

  fileHandle = (e) => {
    this.setState ({
      avatar: e.target.files[0]
    })
  }

  render() {
    console.log(this.state.avatar)
    const { value } = this.state
    return (
      <div className="sign-up-page">
      <Form onSubmit={this.handleSubmit} className="sign-up-form">
        <Form.Group widths='equal' className="first-three-input">
          <Form.Field onChange={this.handleChange} control={Input} label='Full name' name="name" placeholder='Full Name' value={this.state.name}/>
          <Form.Field onChange={this.handleChange} control={Input} label='Username' name="username" placeholder="Username" value={this.state.username}/>
          <Form.Field onChange={this.handleChange} control={Input} label='Password' name="password" placeholder='Password' value={this.state.password}/>
        </Form.Group>
        <Form.Group widths='equal' className="second-three-input">
          <Form.Field onChange={this.handleChange} control={Input} label='Email' name="email" placeholder='example@example.com' value={this.state.email}/>
          <Form.Field onChange={this.handleChange} control={Input} label='Instagram' name="instagram_handle" placeholder="@Instagram Handle" value={this.state.instagram_handle}/>
          <Form.Select className="location-form" onChange={this.locationChange} fluid label='Location' name="location" options={options} placeholder='Location' value={this.state.location}/>
        </Form.Group>
        <br/>
        <Form.Group inline className="avatar-upload">
          <label>Upload Profile Image</label>
          <input type="file" id="fileLoader" name="avatar" title="Load File" onChange={this.fileHandle}/>
          <input type="button" id="btnOpenFileDialog" value = "Click Me !!!" onClick="openfileDialog();" />
        </Form.Group>
        <Form.Group inline className="skillsets">
          <label>Skillset</label>
          <Form.Field
            control={Checkbox}
            label='Photographer'
            value='Photographer'
            onClick={this.skillHandleChange}
          />
          <Form.Field
            control={Checkbox}
            label='Model'
            value='Model'
            onClick={this.skillHandleChange}
          />
        </Form.Group>
        <br/>
        <Form.Group inline>
          <Form.Field onChange={this.handleChange} control={Input} label='Instagram Followers' name="follower_count" placeholder='#Follower Count' value={this.state.follower_count}/>
        </Form.Group>
        <br/>
        <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' />
        <Form.Field control={Checkbox} label='I agree to the Terms and Conditions made by Jessy' />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
      </div>
    )
  }

}

export default Signup;
