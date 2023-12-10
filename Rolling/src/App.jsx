import { useEffect, useState } from "react"
import axios from 'axios';
import RecipientMenu from "./components/RecipientMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const ROLLING_API = 'https://rolling-api.vercel.app/2-5/recipients/';
const MESSAGE_API = 'https://rolling-api.vercel.app/2-5/recipients';

const array = [{
  "sender": "슈퍼맨",
  "relationship": "동료",
  "content": "마 .",
  "font": "Pretendard",
  "profileImageURL": "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8"
},
{
  "sender": "배트맨",
  "relationship": "지인",
  "content": "다크나이트.",
  "font": "Noto Sans",
  "profileImageURL": "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8"
},
{
  "sender": "울트라맨",
  "relationship": "가족",
  "content": "ㅇㅇ.",
  "font": "나눔손글씨 손편지체",
  "profileImageURL": "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8"
},
{
  "sender": "툴툴맨",
  "relationship": "가족",
  "content": "오늘도 툴툴거입니다.",
  "font": "나눔명조",
  "profileImageURL": "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8"
}];

function App() {
  const [data, setData] = useState();

  const getRollingData = async() => {
    try {
      const response = await axios.get('https://rolling-api.vercel.app/2-5/recipients/');
      const { results } = await response.data;
      console.log(results);
    } catch(error) {
      alert(error);
    }
  };

  const postData = async() => {
    try{
      const response = await axios.post(`${MESSAGE_API}/835/messages/`, {
        "sender": "HI",
        "relationship": "지인",
        "content": "에효",
        "font": "Pretendard",
        "profileImageURL": "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8"
      });
      console.log(response);
    } catch(error) {
      alert(error);
    }
  };

  const postSampleData = async(data) => {
    try{
      const response = await axios.post(`${MESSAGE_API}/835/messages/`, data);
      console.log(response);
    } catch(error) {
      alert(error);
    }
  };

  const getMessageData = async() => {
    try {
      const response = await axios.get(`${MESSAGE_API}/836/messages/?limit=30`);
      const { results } = await response.data;
      console.log(results);
    } catch(error) {
      alert(error);
    }
  };

  // useEffect(() => {
  //   getRollingData();
  //   // array.map((data) => postSampleData(data));
  //   // postData();
  //   getMessageData();
  // }, []);

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

export default App
