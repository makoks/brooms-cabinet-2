import React, { useState } from 'react';
import { Layout, Tabs } from 'antd';
import { ContentHeader, News, Events, Ideas } from '../../components';
import './styles.css';

export const RubricsPage = () => {
  const content = {
    news: <News />,
    events: <Events />,
    ideas: <Ideas />,
  };

  const [rubric, setRubric] = useState('news');

  return (
    <Layout className="rubrics">
      <ContentHeader title="Рубрики">
        <Tabs defaultActiveKey="news" className="rubrics-tabs" onChange={setRubric}>
          <Tabs.TabPane tab="Новости" key="news" />
          <Tabs.TabPane tab="События" key="events" />
          <Tabs.TabPane tab="Идеи" key="ideas" />
        </Tabs>
      </ContentHeader>
      <Layout.Content style={{ margin: '27px 34px' }}>
        {content[rubric]}
      </Layout.Content>
    </Layout>
  );
};
