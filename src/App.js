import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">Navbar</div>
      <div className="main">
        <div className="sidebar">Side bar</div>
        <div className="content">
          <iframe
            title="Iframe"
            width="100%"
            height="100%"
            src="https://docs.google.com/document/d/1xgBLuznAwNdVGeB4ugA8LHkDh4mXdGia4F3odWSTTWI/edit"
          />
        </div>
        <div className="post">Post</div>
      </div>
    </div>
  );
}

export default App;
