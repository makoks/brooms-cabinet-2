import React, { useState, useEffect } from 'react';
import { Layout, Space, Input, Row, Col, Tag, Table } from 'antd';
import { ContentHeader, VacationCell } from '../../components';
import { API } from '../../API';
import { getDateObject } from '../../utils/helpers';
import './styles.css';

const tagColors = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'];

const currentYear = new Date().getFullYear();

const getVacationDays = vacations => {
  const days = [];
  for (const { start, end } of vacations) {
    const date = getDateObject(start);
    while (true) {
      const dateString = date.toLocaleDateString();
      days.push(dateString);
      if (dateString === end) {
        break;
      }
      date.setDate(date.getDate() + 1);
    }
  }
  return days;
};

const getVacationsLength = vacations => {
  let length = 0;
  for (const { start, end } of vacations) {
    const date1 = getDateObject(start);
    const date2 = getDateObject(end);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    length += diffDays + 1;
  }
  return length;
};

export const VacationPage = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [tag, setTag] = useState(null);
  const [tags, setTags] = useState([]);
  const [vacationDays, setVacationDays] = useState([]);

  const dateColumns = [];
  for (let m = 0; m < 12; m++) {
    const date = new Date(currentYear, m, 1);
    const monthName = date.toLocaleDateString('ru', { month: 'long' });
    const title = `${monthName[0].toUpperCase()}${monthName.slice(1)} ${currentYear}`;
    const children = [];
    while (date.getMonth() === m) {
      const dateString = date.toLocaleDateString();
      const dateNumber = date.getDate();
      children.push({
        title: dateNumber,
        key: dateString,
        dataIndex: dateString,
        width: 24,
        className: [0, 6].includes(date.getDay()) ? 'weekend' : '',
        render: (_, { disabled, vacations }) => (
          <VacationCell
            dateString={dateString}
            vacationDays={disabled ? getVacationDays(vacations) : vacationDays}
            setVacationDays={setVacationDays}
            disabled={disabled}
          />
        ),
      });
      date.setDate(dateNumber + 1);
    }
    dateColumns.push({ title, children });
  }
  const columns = [
    {
      title: 'ФИО',
      dataIndex: 'name',
      key: 'name',
      width: 330,
      fixed: 'left',
    }
  ].concat(dateColumns);

  const onAddTagHandler = tagInput => {
    setTags(tags.concat({ name: tagInput, color: tagColors[Math.floor(Math.random() * 11)] }));
    setTag(null);
  };

  const onRemoveTagHandler = index => {
    setTags(tags.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const fetchVacations = async () => {
      const fetchedVacations = await API.vacations();
      setUsers(fetchedVacations);
      setFilteredUsers(fetchedVacations);
      setVacationDays(getVacationDays(fetchedVacations[0].vacations));
    };

    fetchVacations();
  }, []);

  useEffect(() => {
    setFilteredUsers(users.filter((user, index) => tags.every(tag => {
      const t = tag.name.toLowerCase();
      return index === 0
        || user.userName.toLowerCase().includes(t)
        || user.department.toLowerCase().includes(t)
        || user.role.toLowerCase().includes(t)
        || user.position.toLowerCase().includes(t)
        || user.projects.some(project => project.title.toLowerCase().includes(t) || project?.tagName.toLowerCase().includes(t))
    })))
  }, [tags]);

  return (
    <Layout>
      <ContentHeader title="Отпуск" paddingBottom={true}>
        <Row>
          <Col offset={6} span={12}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Input.Search
                placeholder="Введите тэг или ФИО"
                allowClear
                enterButton="Поиск"
                size="large"
                onSearch={onAddTagHandler}
                value={tag}
                onChange={e => setTag(e.target.value)}
              />
              <div>
                {tags.map((tag, index) => (
                  <Tag closable key={tag.name} color={tag.color} onClose={() => onRemoveTagHandler(index)}>
                    {tag.name}
                  </Tag>
                ))}
              </div>
            </Space>
          </Col>
        </Row>
      </ContentHeader>
      <Layout.Content>
        <Table
          columns={columns}
          dataSource={filteredUsers.map((user, index) => ({
            key: user.userName,
            name: `${user.userName} (${index === 0 ? vacationDays.length : getVacationsLength(user.vacations)}/28)`,
            disabled: index !== 0,
            vacations: user.vacations,
          }))}
          scroll={{ x: 9090 }}
          bordered
          className="vacation__table"
          pagination={false}
        />
      </Layout.Content>
    </Layout>
  )
};
