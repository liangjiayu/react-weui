import React from 'react';
import { Button, Footer, Msg } from 'react-weui';

export default () => {
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <Msg
        icon="error"
        title="操作成功"
        description="内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现"
        operation={<Button>辅助操作</Button>}
        tips="提示详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现"
        extra={
          <Footer links={[{ children: '底部链接文本' }]} text="Copyright © 2008-2016 weui.io" />
        }
      />
    </div>
  );
};
