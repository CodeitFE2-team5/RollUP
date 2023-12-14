import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const RECIPIENT_API = 'https://rolling-api.vercel.app/2-5/recipients';

export const useRollingPaperList = (sort = '') => {
  const [rollingPaperList, setRollingPaperList] = useState();
  const [error, setError] = useState();

  const getRollingPaperList = useCallback(async() => {
    try{
      const response = await axios.get(`${RECIPIENT_API}/?limit=8&offset=8&sort=${sort}`);
      const { results } = await response.data;
      setRollingPaperList(results);
    } catch(error) {
      alert(error);
      setError(error);
    }
  }, [sort]);

  useEffect(() => {
    getRollingPaperList();
  }, [getRollingPaperList])

  return [rollingPaperList, error];
};
