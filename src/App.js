import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () =>{
 const pageSize = 6;
 const apiKey = process.env.REACT_APP_NEWS_API
   
 const [progress, setProgress] = useState(0)


    return (

      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar height={3} color='#f11946' progress={progress}/>
            
          <Routes>
            <Route path="" element={<News setProgress={setProgress} apiKey={apiKey} key="" pageSize={pageSize} country={'in'} category={"general"} />} />
            <Route path="Sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={'in'} category={"sports"} />} />
            <Route path="Business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={'in'} category={"business"} />} />
            <Route path="Entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={'in'} category={"entertainment"} />} />
            <Route path="Technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={'in'} category={"technology"} />} />
            <Route path="Science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={'in'} category={"science"} />} />
            <Route path="Health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={'in'} category={"health"} />} />
            <Route path="General" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={'in'} category={"general"} />} />

          </Routes>
        </BrowserRouter>
      </div>
    )
  
}

export default App;
