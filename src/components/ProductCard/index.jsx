import React, { useState } from 'react';
import { Space, Typography, Row, Col, Card, Radio, InputNumber, Button } from 'antd';
import './styles.css';

export const ProductCard = ({ product, disabled = undefined }) => {
  const [size, setSize] = useState('S');
  const [count, setCount] = useState(1);

  return (
    <Col span={6} key={product.id} className={disabled ? 'product-card_disabled' : ''}>
      <Card
        cover={(
          <img alt={product.title} src={product.imageUrl} height={160} style={{ objectFit: 'cover' }} />
        )}
        actions={[
          <InputNumber value={count} onChange={setCount} disabled={disabled} />,
          <Button type="primary" disabled={disabled}>Купить</Button>,
        ]}
      >
        <Card.Meta title={product.title} />
        <Space direction="vertical" style={{ width: '100%' }} size="large">
          <Row style={{ marginTop: 16 }}>
            <Col span={12}>
              <Typography.Text type="secondary">Merch - coins</Typography.Text>
              <div style={{ fontSize: 24 }}>{product.coins}</div>
            </Col>
            <Col span={12}>
              <Typography.Text type="secondary">Мин. ур. кармы</Typography.Text>
              <div style={{ fontSize: 24 }}>{product.karma}</div>
            </Col>
          </Row>
          <Radio.Group
            onChange={e => setSize(e.target.value)}
            value={size}
            style={{ display: 'flex', justifyContent: 'center' }}
            disabled={disabled}
          >
            <Radio value="S">S</Radio>
            <Radio value="M">M</Radio>
            <Radio value="L">L</Radio>
          </Radio.Group>
        </Space>
      </Card>
    </Col>
  )
};
