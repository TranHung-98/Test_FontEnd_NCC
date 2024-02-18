import Content from '../components/Content';
import Navbar from '../components/Navbar';
import '../style/App.scss';
import '../style/Responsive.scss';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Content />}> </Route>
              <Route path="/service" element={<Content />}> </Route>
              <Route path="/new" element={<Content />}> </Route>
              <Route path="/blog" exact element={<Content />}> </Route>
              <Route path="/contact" exact element={<Content />}> </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
