import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class UserDetailsForm extends React.Component {
  render() {
    const values = this.props.values;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Enter User Details" />
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              defaultValue={values.firstName}
              onChange={this.props.handleChange('firstName')}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              defaultValue={values.lastName}
              onChange={this.props.handleChange('lastName')}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              defaultValue={values.email}
              onChange={this.props.handleChange('email')}
              margin="normal"
              fullWidth
            />
            <br />
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

export default UserDetailsForm;
