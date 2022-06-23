import React, { useEffect, useState } from "react";
import { ContentHeader } from "../components";
import { EventsList } from "../components/Events/EventsList/EventsList";
import { Layout } from "antd";
import { API } from "../API";

export const NewsPage = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getEvents = async () => {
      setNews(await API.news());
    };

    getEvents();
  }, []);

  return (
    <Layout>
      <ContentHeader title="Новости" />
      <Layout.Content style={{padding: 16}}>
        <EventsList events={news}/>
      </Layout.Content>
    </Layout>
  );
};
