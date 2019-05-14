import React from 'react';
import './App.css';
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

class Signup extends React.Component {

  state = {
    name: "",
    location: "",
    instagram_handle: "",
    follower_count: "",
    email: "",
  }

  handleChange = (e) => {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  render() {

    const { value } = this.state
    console.log(this.state)
    return (
      <div className="sign-up-page">
      <Form>
        <Form.Group widths='equal'>
          <Form.Field onChange={this.handleChange} control={Input} label='Full name' name="name" placeholder='Full Name' />
          <Form.Field control={Input} label='Last name' placeholder='Last name' />
        </Form.Group>
        <Form.Group inline>
          <label>Quantity</label>
          <Form.Field
            control={Radio}
            label='One'
            value='1'
            checked={value === '1'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Two'
            value='2'
            checked={value === '2'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Three'
            value='3'
            checked={value === '3'}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' />
        <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
      </div>
    )
  }

}

export default Signup;
