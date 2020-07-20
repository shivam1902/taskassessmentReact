import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { userSignup } from "../actions/index";
import validate from "./validate";

export const useStyles = (theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

export class SignUp extends Component {
  renderInput = ({
    input,
    label,
    meta: { touched, error },
    className,
    type,
  }) => {
    return (
      <TextField
        className={className}
        {...input}
        label={label}
        type={type}
        error={touched && error}
        helperText={touched && error}
      />
    );
  };

  onSubmit = (formValues) => {
    this.props.userSignup(formValues);
  };
  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form
            onSubmit={this.props.handleSubmit(this.onSubmit)}
            className={classes.form}
          >
            <Field
              name="name"
              component={this.renderInput}
              label="Enter First Name"
              className={classes.form}
            />
            <Field
              name="email"
              component={this.renderInput}
              label="Enter Email"
              className={classes.form}
            />
            <Field
              name="number"
              component={this.renderInput}
              label="Enter Contact Number "
              className={classes.form}
              type="number"
            />
            <Field
              name="password"
              component={this.renderInput}
              label="Enter Password "
              className={classes.form}
              type="password"
            />
            <Field
              name="conformpassword"
              component={this.renderInput}
              label="Enter Conform Password "
              className={classes.form}
              type="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

const formContent = reduxForm({ form: "signup", validate })(
  withStyles(useStyles)(SignUp)
);

export default connect(null, { userSignup })(formContent);
