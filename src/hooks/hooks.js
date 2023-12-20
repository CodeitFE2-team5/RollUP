import { useCallback, useEffect, useState } from "react";
import getURL from "../utils/getURL";
import { LIMIT } from "../constants/constants";
import { getData } from "../api/api";

export const useRollingPaperList = (sort = '') => {
  const [rollingPaperList, setRollingPaperList] = useState([]);
  const [url, setUrl] = useState(getURL('', '', 'GET', LIMIT, 0, sort));

  const getRollingPaperList = useCallback(async() => {
    const { previous, next, results } = await getData(url);
    
    if(!previous) setRollingPaperList(results);
    else setRollingPaperList((prev) => [...prev, ...results]);
    
    if(next) setUrl(next);
  }, [url]);

  useEffect(() => {
    getRollingPaperList();
  }, [getRollingPaperList])

  return [rollingPaperList];
};

export const useReactions = (id) => {
  const [reactions, setReactions] = useState([]);
  const [url, setUrl] = useState(getURL(id, 'reactions'));

  const getReactions = useCallback(async() => {
    const { previous, next, results } = await getData(url);
    
    if(!previous) setReactions(results);
    else setReactions((prev) => [...prev, ...results]);
    
    if(next) setUrl(next);
  }, [url])

  useEffect(() => {
    getReactions();
  }, [getReactions])

  return reactions;
}
