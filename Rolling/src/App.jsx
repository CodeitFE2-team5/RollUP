// import { ListPage } from './page/ListPage';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react"
import axios from 'axios';
import RecipientMenu from "./components/RecipientMenu/RecipientMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const ROLLING_API = 'https://rolling-api.vercel.app/2-5/recipients/';
const MESSAGE_API = 'https://rolling-api.vercel.app/2-5/recipients';
function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecipientMenu />}></Route>
          {/* <RecipientMenu /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
