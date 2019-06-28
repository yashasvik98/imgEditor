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
      </div>
    </Provider>
  );
}

export default App;
