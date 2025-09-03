import React from 'react';
import { Button, Cells, Input } from 'react-weui';
import { Footer } from 'react-weui';
import './styles.less';

export default () => {
  return (
    <div className="form-layout-demo">
      <div className="weui-form">
        <div className="weui-form__text-area">
          <div className="weui-form__title">表单结构</div>
          <div className="weui-form__desc">
            展示表单页面的信息结构样式,
            分别由头部区域/控件区域/提示区域/操作区域和底部信息区域组成。
          </div>
        </div>
        <div className="weui-form__control-area">
          <div className="weui-cells__group weui-cells__group_form">
            <Cells title="表单组标题">
              <Cells.Item prefix={<span className="weui-label">微信号</span>}>
                <Input placeholder="填写本人微信号" />
              </Cells.Item>
              <Cells.Item prefix={<span className="weui-label">昵称</span>}>
                <Input placeholder="填写本人微信号的昵称" />
              </Cells.Item>
              <Cells.Item
                prefix={
                  <div>
                    <span className="weui-label">联系电话</span>
                    <span className="weui-cell__desc">副标题</span>
                  </div>
                }
              >
                <Input
                  placeholder="填写绑定的电话号码"
                  type="number"
                  pattern="[0-9]*"
                />
              </Cells.Item>
            </Cells>
          </div>
        </div>
        <div className="weui-form__tips-area">
          <div className="weui-form__tips">表单页提示，居中对齐</div>
        </div>
        <div className="weui-form__opr-area">
          <Button type="primary">确定</Button>
        </div>
        <div className="weui-form__tips-area">
          <div className="weui-form__tips">表单页提示，居中对齐</div>
        </div>
        <div className="weui-form__extra-area">
          <Footer
            links={
              <>
                <a className="weui-footer__link" href="javascript:">
                  底部链接文本
                </a>
              </>
            }
            text="Copyright © 2008-2019 weui.io"
          />
        </div>
      </div>
    </div>
  );
};
