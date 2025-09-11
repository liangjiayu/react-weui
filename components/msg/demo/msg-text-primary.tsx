import React from 'react';
import { Button, Msg } from 'react-weui';

export default () => {
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <Msg
        title="操作成功"
        description="内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现"
        operation={<Button type="primary">推荐操作</Button>}
        tips="提示详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现"
      />
    </div>
  );
};
