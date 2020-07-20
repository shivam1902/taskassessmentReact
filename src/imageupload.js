import React from "react";
import Webcam from "react-webcam";
import Alert from "@material-ui/lab/Alert";

const axios = require("axios");

class ReactUploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      data: "Jordan Belfort",
      errorState: null,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  data;
  componentDidMount() {
    this.getData();
  }
  componentWillUnmount() {
    clearInterval(this.data);
  }
  getData() {
    this.data = setInterval(() => {
      this.onFormSubmit();
    }, 30000);
  }
  errorState() {
    return (
      <Alert variant="filled" severity="success">
        This is a success alert — check it out!
      </Alert>
    );
  }
  onFormSubmit() {
    const userId = localStorage.getItem("userId");
    var screenshot = this.refs.webcam.getScreenshot();
    fetch(screenshot)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], userId, { type: "image/jpeg" });
        this.setState({ file: file });
      });

    const formData = new FormData();
    formData.append("myImage", this.state.file);
    formData.append("userId", userId);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios
      .post("http://localhost:5000/upload", formData, config)
      .then((response) => {
        this.setState({ errorState: response.data });
        setTimeout(() => {
          this.setState({ errorState: null });
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  render() {
    return (
      <form>
        <h1>File Upload</h1>
        <Webcam audio={false} ref="webcam" />
        {this.state.errorState ? this.errorState() : null}
      </form>
    );
  }
}

export default ReactUploadImage;
