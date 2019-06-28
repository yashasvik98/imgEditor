import React, { Component } from "react";
import { connect } from "react-redux";
import { getImage } from "../actions/imageActions";
import PropTypes from "prop-types";

class Image extends Component {
  componentDidMount() {
    this.props.getImage();
  }

  render() {
    const { image } = this.props.image;
    console.log(image["url"]);
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
                <form
                  action="/upload"
                  method="POST"
                  enctype="multipart/form-data"
                >
                  <input type="file" className="" name="myImage" />
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
  { getImage }
)(Image);
