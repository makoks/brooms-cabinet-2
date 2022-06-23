import React from "react";
import ru from "javascript-time-ago/locale/ru";
import TimeAgo from "javascript-time-ago";
import { Card, Avatar } from "antd";

const { Meta } = Card;
TimeAgo.addDefaultLocale(ru);
const timeAgo = new TimeAgo("ru-RU");

export const EventCard = ({
  imageUrl,
  title,
  description,
  publishedAt,
  authors,
}) => {
  return (
    <Card
      hoverable
      style={{ width: 300, margin: "0 auto" }}
      cover={<img alt={title} src={imageUrl} />}
    >
      <Meta title={title} />
      <p>{description}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Meta description={timeAgo.format(publishedAt)} />
        <Avatar.Group maxCount={3}>
          {authors.map((author, index) => (
            <Avatar src={author.avatarUrl} key={index} />
          ))}
        </Avatar.Group>
      </div>
    </Card>
  );
};
