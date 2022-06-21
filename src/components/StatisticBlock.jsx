import React from 'react';
import { Divider, Typography } from 'antd';

export const StatisticBlock = ({ title, count, total = undefined }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center' }}>
    <div style={{
      textAlign: 'end',
      margin: '0 32px',
      display: 'inline-flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: 64,
    }}>
      <Typography.Text type="secondary">
        {title}
      </Typography.Text>
      <div>
        <span style={{ fontSize: 24 }}>
          {count}
        </span>
        {total && (
          <span style={{ fontSize: 16 }}>
            /{total}
          </span>
        )}
      </div>
    </div>
    <Divider type="vertical" style={{ height: 32 }} />
  </div>
);
