import axios from "axios";
import { useEffect, useState } from "react";

export const useRollingPaperList = () => {
  const [rollingPaperList, setRollingPaperList] = useState();

  const getRollingPaperList = async() => {
    try{
      const response = await axios.get('https://rolling-api.vercel.app/2-5/recipients/');
      const { results } = await response.data;
      setRollingPaperList(results);
    } catch(error) {
      alert(error);
    }
  };

  useEffect(() => {
    getRollingPaperList();
  }, [])

  return rollingPaperList;
};

// const getRollingData = async() => {
//   try {
//     const response = await axios.get('https://rolling-api.vercel.app/2-5/recipients/');
//     const { results } = await response.data;
//     console.log(results);
//   } catch(error) {
//     alert(error);
//   }
// };
// useEffect(() => {
//   getRollingData();
// }, []);
