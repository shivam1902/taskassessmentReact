import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import validate from "./validate";
import { userSignin } from "../actions/index";

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
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

export class Signin extends Component {
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
    this.props.userSignin(formValues);
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
            Sign in
          </Typography>
          <form
            onSubmit={this.props.handleSubmit(this.onSubmit)}
            className={classes.form}
          >
            <Field
              name="email"
              component={this.renderInput}
              label="Enter Email"
              className={classes.form}
            />
            <Field
              name="password"
              component={this.renderInput}
              label="Enter Password "
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
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link to="#">Forgot password?</Link> */}
              </Grid>
              <Grid item>
                <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

const formContent = reduxForm({ form: "signin", validate })(
  withStyles(useStyles)(Signin)
);

export default connect(null, { userSignin })(formContent);
