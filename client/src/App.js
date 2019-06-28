import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Image from "./components/Image";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Image />
        {/* <form action="/upload" method="POST" enctype="multipart/form-data">
        <div class="file-field input-field">
          <div class="btn grey">
            <span>File</span>
            <input name="myImage" type="file" />
          </div>
          <div class="file-path-wrapper">
            <input class="file-path validate" type="text" />
          </div>
        </div>
        <button type="submit" class="btn">
          Submit
        </button>
      </form>
      <br />
      <img
        src="<%= typeof file !='undefined' ? file : '' %>"
        alt=""
        class="responsive-img"
      /> */}
      </div>
    </Provider>
  );
}

export default App;
