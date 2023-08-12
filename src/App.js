import React from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Chat from './component/Chat'
import Status from './component/Status'
import Nav from "./component/Nav"
import Top from "./component/Top"


function App() {
  return (
    <div>
      <Top/>
      <Nav />
      <Routes>
        <Route path="/Chat" element={<Chat />}></Route>
        
        <Route path="/Status" element={<Status/>}></Route>
      </Routes>
    </div>
  )
}

export default App
