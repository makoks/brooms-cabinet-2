import React, { useState } from 'react';
import { List, Space, Typography, Tag, Avatar, Button, Divider, Input } from 'antd';
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import { Comment } from './Comment';

export const Idea = ({ idea, index, currentUser }) => {
  const [stars, setStars] = useState(190);
  const [likes, setLikes] = useState(111);
  const [comments, setComments] = useState([
    {
      name: 'Han Solo',
      text: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      avatarUrl: 'https://joeschmoe.io/api/v1/random',
      createdAt: '2022-06-29 23:55:11',
    }, {
      name: 'Han Solo',
      text: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      avatarUrl: 'https://joeschmoe.io/api/v1/random',
      createdAt: '2022-06-29 23:55:11',
    },
  ]);
  const [commentText, setCommentText] = useState('');

  const onAddCommentHandler = () => {
    if (commentText) {
      setComments(comments.concat({
        name: currentUser.name,
        text: commentText,
        avatarUrl: currentUser.avatarUrl,
        createdAt: Date(),
      }));
    }
    setCommentText('');
  };

  return (
    <List.Item
      key={index}
    >
      <List.Item.Meta title={(
        <Space direction="vertical">
          <Typography.Title level={5}>Alipay</Typography.Title>
          <div>
            <Tag>Ant Design</Tag>
            <Tag>Design Language</Tag>
            <Tag>Ant Finance</Tag>
          </div>
        </Space>
      )} />
      <Space direction="vertical" size="middle">
        {idea.textIdea}
        <Space size="middle">
          <Avatar size={20} src="https://robohash.org/temporibusvitaeconsectetur.jpg?size=20x20&set=set1" />
          <div><Typography.Link href="#">Little Pie</Typography.Link> published at <Typography.Link href="https://ant.design">https://ant.design</Typography.Link> </div>
          <Typography.Text type="secondary">2021-02-05 13:51</Typography.Text>
        </Space>
        <Typography.Text type="secondary">
          <Space>
            <span onClick={() => setStars(stars + 1)} style={{ cursor: 'pointer' }}>
              <Space><StarOutlined />{stars}</Space>
            </span>
            <Divider type="vertical" />
            <span onClick={() => setLikes(likes + 1)} style={{ cursor: 'pointer' }}>
              <Typography.Text type="secondary"><Space><LikeOutlined />{likes}</Space></Typography.Text>
            </span>
            <Divider type="vertical" />
            <Typography.Text type="secondary"><Space><MessageOutlined />20</Space></Typography.Text>
          </Space>
        </Typography.Text>
        <div style={{ alignItems: 'start' }}>
          <Avatar src={currentUser.avatarUrl} style={{ verticalAlign: 'top', marginRight: 8 }} />
          <Space direction="vertical" style={{ width: 'calc(100% - 40px)' }}>
            <Input.TextArea rows={4} showCount maxLength={100} value={commentText} onChange={e => setCommentText(e.target.value)} />
            <Button type="primary" onClick={onAddCommentHandler}>Add Comment</Button>
          </Space>
        </div>
        {comments.map((comment, index) => (
          <Comment
            key={index}
            name={comment.name}
            text={comment.text}
            avatarUrl={comment.avatarUrl}
            createdAt={comment.createdAt}
          />
        ))}
      </Space>
    </List.Item>
  );
};
