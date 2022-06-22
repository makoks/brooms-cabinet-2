import React from "react";
import { Row, Col } from "antd";
import { EventCard } from "./EventCard/EventCard";
import "./style.css";

export const EventsList = ({ events }) => {
  return (
    <Row gutter={[16, 16]} className='events-list'>
      {events.map((event) => (
        <Col key={event.id} span={24 / 4}>
          <EventCard {...event} />
        </Col>
      ))}
    </Row>
  );
};
