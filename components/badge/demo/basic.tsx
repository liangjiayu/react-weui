import React from 'react';
import { Badge, Cells } from 'react-weui';

export default () => {
  return (
    <div
      style={{
        backgroundColor: 'var(--weui-BG-0)',
        minHeight: '100vh',
      }}
    >
      <div className="page__hd">
        <div className="page__title">Badge</div>
        <div className="page__desc">徽章</div>
      </div>

      <Cells title="新消息提示跟摘要信息后，统一在列表右侧">
        <Cells.Item
          arrow
          suffix={
            <span className="flex items-center gap-1">
              <span>详细信息</span>
              <Badge dot />
            </span>
          }
        >
          单行列表
        </Cells.Item>
      </Cells>

      <Cells title="未读数红点跟在主题信息后，统一在列表左侧">
        <Cells.Item
          prefix={
            <div className="mr-2">
              <Badge count={8}>
                <img src="https://weui.io/images/pic_160.png" alt="" width={50} />
              </Badge>
            </div>
          }
        >
          <div>
            <div>联系人名称</div>
            <div className="text-13px color-888">摘要信息</div>
          </div>
        </Cells.Item>
        <Cells.Item arrow>
          <span className="align-middle mr-2">单行列表</span>
          <Badge count={8} />
        </Cells.Item>
        <Cells.Item arrow suffix="详细信息">
          <span className="align-middle mr-2">单行列表</span>
          <Badge count={8} />
        </Cells.Item>
        <Cells.Item arrow>
          <span className="align-middle mr-2">单行列表</span>
          <Badge count="New" />
        </Cells.Item>
      </Cells>
    </div>
  );
};
