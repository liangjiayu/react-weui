import React from 'react';
import { Msg, Button } from 'react-weui';
import DemoBlock from '@/demos/DemoBlock';

export default () => {
  return (
    <div style={{ paddingTop: 30, paddingBottom: 60 }}>
      <DemoBlock title="成功提示页" noStyle>
        <Msg
          icon="success"
          title="操作成功"
          description="内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现"
          operation={
            <div>
              <Button type="primary">推荐操作</Button>
            </div>
          }
          tips="提示详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现"
          extra="footer"
        >
          1.说明1 2.说明2
        </Msg>
      </DemoBlock>

      <DemoBlock title="失败提示页" noStyle>
        <Msg
          icon="warn"
          title="操作失败"
          description="内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现"
          operation={
            <div>
              <Button type="default">辅助操作</Button>
            </div>
          }
          tips="提示详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现"
          extra="footer"
        >
          1.说明1 2.说明2
        </Msg>
      </DemoBlock>

      <DemoBlock title="无图标提示页" noStyle>
        <Msg
          title="无图标"
          description="内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现"
          operation={
            <div>
              <Button type="default">辅助操作</Button>
            </div>
          }
        />
      </DemoBlock>
    </div>
  );
};
