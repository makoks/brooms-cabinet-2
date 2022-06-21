import React, { useState, useEffect } from 'react';
import { Layout, Space, Typography, Avatar, Input, Row } from 'antd';
import { ContentHeader, StatisticBlock, ProductCard } from '../components';
import { API } from '../API';

export const ShopPage = () => {
  const [user, setUser] = useState({});
  const [shop, setShop] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);

  const onSearch = (value) => {
    setFilteredProducts(shop.products.filter(({ title }) => title.toLowerCase().includes(value.toLowerCase())));
  };

  useEffect(() => {
    const fetchUser = async () => {
      setUser(await API.user());
    };
    const fetchShop = async () => {
      const fetchedShop = await API.shop();
      setShop(fetchedShop);
      setFilteredProducts(fetchedShop.products);
    };

    fetchUser();
    fetchShop();
  }, []);

  return (
    <Layout>
      <ContentHeader title="Магазин" paddingBottom={true}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Space size="large">
            <Avatar src={user.avatarUrl} size={72} />
            <Typography.Title level={4}>
              {user.name?.slice(0, user.name.indexOf(' ') + 2)}
            </Typography.Title>
          </Space>
          <div>
            <StatisticBlock title="Merch - coins" count={shop.coins} />
            <StatisticBlock title="Карма" count={`${shop.karma}`} total={100} />
          </div>
          <Input.Search
            placeholder="Поиск по названию"
            allowClear
            enterButton="Поиск"
            size="large"
            style={{ width: 520 }}
            onSearch={onSearch}
          />
        </div>
      </ContentHeader>
      <Layout.Content style={{ margin: '27px 34px' }}>
        <Row gutter={[10, 30]}>
          {filteredProducts.map(product => (
            <ProductCard product={product} disabled={product.karma > shop.karma} />
          ))}
        </Row>
      </Layout.Content>
    </Layout>
  )
};
