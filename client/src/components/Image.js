import React, { Component } from "react";
import { connect } from "react-redux";
import { getImage, addImage } from "../actions/imageActions";
import PropTypes from "prop-types";
const axios = require("axios");

class Image extends Component {
  state = {
    file: null
  };
  componentDidMount() {}

  onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("myImage", this.state.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    axios
      .post("/upload", formData, config)
      .then(response => {
        console.log("Uploaded");
      })
      .catch(error => {});
    this.props.getImage();
  };

  onChange = e => {
    this.setState({ file: e.target.files[0] });
  };
  render() {
    const { image } = this.props.image;
    // console.log(image["url"]);
    return (
      <div>
        <nav className="navbar navbar-dark bg-info mb-5">
          <div className="container">
            <a href="/" className="navbar-brand pt-0">
              imgEditor
            </a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <div className="custom-file mb-3">
                <form onSubmit={this.onSubmit}>
                  <input
                    type="file"
                    className=""
                    name="myImage"
                    onChange={this.onChange}
                  />
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
              <img src={image["url"]} alt="" width="500" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Image.propTypes = {
  getImage: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  image: state.image
});

export default connect(
  mapStateToProps,
  { getImage, addImage }
)(Image);
