import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import UploadForm from "./components/UploadForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <UploadForm />
    </div>
  );
}

export default App;
