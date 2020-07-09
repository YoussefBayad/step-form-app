import React, { Component } from 'react';
import UserDetailsForm from './UserDetailsForm';
import UserPersonalDetails from './UserPersonalDetails';
import Confirm from './Confirm';

export class UserForm extends Component {
  state = {
    step: 1,

    firstName: '',
    lastName: '',
    email: '',
    occupation: 'occ',
    city: 'city',
    bio: 'bio',
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };
  render() {
    const { step } = this.state;
    const { firstName, lastName, email, bio, occupation, city } = this.state;

    const values = { firstName, lastName, email };
    const personalDetails = { bio, occupation, city };
    switch (step) {
      case 1:
        return (
          <UserDetailsForm
            handleChange={this.handleChange}
            values={values}
            nextStep={this.nextStep}
          />
        );
      case 2:
        return (
          <UserPersonalDetails
            values={personalDetails}
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 3:
        return (
          <Confirm
            values={this.state}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 4:
        return <div>success</div>;
    }
  }
}

export default UserForm;
