import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import NewsCom from './components/NewsCom';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // 4926faa404ca4f4eb3faa6b49662dba6
  const apiKey = process.env.REACT_APP_NEWS_API
  const pageSize = 15;

  const [progress, setProgress] = useState(10);

  return (
    <div>
      <Router>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<NewsCom setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category='general' />} />
          <Route exact path="/business" element={<NewsCom setProgress={setProgress} apiKey={apiKey} key='business' pageSize={pageSize} country="in" category='business' />} />
          <Route exact path="/entertainment" element={<NewsCom setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={pageSize} country="in" category='entertainment' />} />
          <Route exact path="/health" element={<NewsCom setProgress={setProgress} apiKey={apiKey} key='health' pageSize={pageSize} country="in" category='health' />} />
          <Route exact path="/science" element={<NewsCom setProgress={setProgress} apiKey={apiKey} key='science' pageSize={pageSize} country="in" category='science' />} />
          <Route exact path="/sports" element={<NewsCom setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pageSize} country="in" category='sports' />} />
          <Route exact path="/technology" element={<NewsCom setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={pageSize} country="in" category='technology' />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App