import React, { useState } from 'react';
import { Avatar, Comment as AntdComment, Tooltip, Typography } from 'antd';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import TimeAgo from 'javascript-time-ago';

const timeAgo = new TimeAgo('ru-RU');

export const Comment = ({ name, text, avatarUrl, createdAt }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <AntdComment
      actions={[
        <Tooltip key="comment-basic-like" title="Like">
          <span onClick={() => setLikes(likes + 1)}>
            <LikeOutlined />
            <span className="comment-action">{likes}</span>
          </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
          <span onClick={() => setDislikes(dislikes + 1)}>
            <DislikeOutlined />
            <span className="comment-action">{dislikes}</span>
          </span>
        </Tooltip>,
      ]}
      author={<Typography.Link href="#">{name}</Typography.Link>}
      avatar={<Avatar src={avatarUrl} alt={name} />}
      content={<p>{text}</p>}
      datetime={timeAgo.format(new Date(createdAt))}
    />
  );
};
