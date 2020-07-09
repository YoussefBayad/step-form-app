import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class UserPersonalDetails extends Component {
  render() {
    const { bio, occupation, city } = this.props.values;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Enter Personal Details" />
            <TextField
              placeholder="Enter Your Occupation"
              label="Occupation"
              defaultValue={occupation}
              onChange={this.props.handleChange('occupation')}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your City"
              label="City"
              defaultValue={city}
              onChange={this.props.handleChange('city')}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Bio"
              label="Bio"
              defaultValue={bio}
              onChange={this.props.handleChange('bio')}
              margin="normal"
              fullWidth
            />
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.props.prevStep}
            >
              Back
            </Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.props.nextStep}
            >
              Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default UserPersonalDetails;
