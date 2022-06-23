import React, { useEffect, useState } from 'react';
import { EventsList } from '../Events/EventsList/EventsList';
import { API } from '../../API';

export const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      setNews(await API.news());
    };

    getNews();
  }, []);

  return <EventsList events={news}/>;
};
