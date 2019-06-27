import React, { Component } from "react";
import { Container, Button, InputGroup, Input, Form } from "reactstrap";
class UploadForm extends Component {
  render() {
    return (
      <Container>
        <h2>Upload an Image to edit</h2>
        <Form action="/upload" method="POST" enctype="multipart/form-data">
          <div className="file-field input-field">
            <InputGroup>
              <Button
                color="primary"
                style={{ marginBottom: "2rem", paddingBottom: "3rem" }}
              >
                Upload
              </Button>

              <Input name="myImage" type="file" />
            </InputGroup>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div>
          <Button type="submit" color="dark" style={{ marginBottom: "2rem" }}>
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default UploadForm;
