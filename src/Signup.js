import React from 'react';
import './App.css';
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

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
    skill: []
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

  render() {
    const { value } = this.state
    return (
      <div className="sign-up-page">
      <Form className="sign-up-form">
        <Form.Group widths='equal' className="first-three-input">
          <Form.Field onChange={this.handleChange} control={Input} label='Full name' name="name" placeholder='Full Name' />
          <Form.Field onChange={this.handleChange} control={Input} label='Username' name="username" placeholder="Username" />
          <Form.Field onChange={this.handleChange} control={Input} label='Password' name="password" placeholder='Password' />
        </Form.Group>
        <Form.Group widths='equal' className="second-three-input">
          <Form.Field onChange={this.handleChange} control={Input} label='Email' name="email" placeholder='example@example.com' />
          <Form.Field onChange={this.handleChange} control={Input} label='Instagram' name="instagram_handle" placeholder="@Instagram Handle" />
          <Form.Select className="location-form" onChange={this.locationChange} fluid label='Location' name="location" options={options} placeholder='Location'/>
        </Form.Group>
        <Form.Group inline>
          <label>Skillset</label>
          <Form.Field
            control={Checkbox}
            label='Photographer'
            value='photographer'
            onClick={this.skillHandleChange}
          />
          <Form.Field
            control={Checkbox}
            label='Model'
            value='model'
            onClick={this.skillHandleChange}
          />
        </Form.Group>
        <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' />
        <Form.Field control={Checkbox} label='I agree to the Terms and Conditions made by Jessy' />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
      </div>
    )
  }

}

export default Signup;
