import React, { useEffect, useState } from "react";
import { ContentHeader } from "../components";
import { EventsList } from "../components/Events/EventsList/EventsList";
import { Layout } from "antd";
import { API } from "../API";

export const EventsPage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const getEvents = async () => {
      setEvents(await API.events());
    };

    getEvents();
  }, []);

  return (
    <Layout>
      <ContentHeader title="События" />
      <Layout.Content style={{padding: 16}}>
        <EventsList events={events}/>
      </Layout.Content>
    </Layout>
  );
};
