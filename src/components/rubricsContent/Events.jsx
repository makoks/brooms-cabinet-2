import React, { useEffect, useState } from 'react';
import { EventsList } from '../Events/EventsList/EventsList';
import { API } from '../../API';

export const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      setEvents(await API.events());
    };

    getEvents();
  }, []);

  return <EventsList events={events}/>;
};
