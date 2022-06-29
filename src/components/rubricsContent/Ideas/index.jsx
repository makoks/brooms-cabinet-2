import React, { useEffect, useState } from 'react';
import { Card, List } from 'antd';
import { Idea } from './Idea';
import Loader from '../../common/Loader';
import { API } from '../../../API';

export const Ideas = () => {
  const [ideas, setIdeas] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const getIdeas = async () => {
      setloading(true);
      setIdeas(await API.ideas());
      setloading(false);
    };
    const getUser = async () => {
      setUser(await API.user());
    };

    getIdeas();
    getUser();
  }, []);

  return (
    <Card>
      {loading ? <Loader /> : (
        <List
          itemLayout="vertical"
          size="large"
          dataSource={ideas}
          renderItem={(idea, index) => <Idea idea={idea} index={index} currentUser={user} />}
        />
      )}
    </Card>
  );
};
