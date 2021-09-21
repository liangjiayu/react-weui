import React from 'react';
import { Row, Col } from 'react-weui';
import DemoBlock from '@/demos/DemoBlock';
import './index.less';

export default () => {
  return (
    <div id="demos-flex-box">
      <DemoBlock title="基础用法">
        <Row>
          <Col span={8}>span: 8</Col>
          <Col span={8}>span: 8</Col>
          <Col span={8}>span: 8</Col>
        </Row>

        <Row>
          <Col span={4}>span: 4</Col>
          <Col span={10} offset={4}>
            offset: 4, span: 10
          </Col>
        </Row>

        <Row>
          <Col offset={12} span={12}>
            offset: 12, span: 12
          </Col>
        </Row>
      </DemoBlock>

      <DemoBlock title="元素间隔">
        <Row gutter={20}>
          <Col span={8}>span: 8</Col>
          <Col span={8}>span: 8</Col>
          <Col span={8}>span: 8</Col>
        </Row>
      </DemoBlock>

      <DemoBlock title="弹性布局">
        <Row>
          <Col style={{ width: 100 }}>100px</Col>
          <Col flex="auto">auto</Col>
        </Row>
        <Row>
          <Col flex="1">1/3</Col>
          <Col flex="2">2/3</Col>
        </Row>
      </DemoBlock>

      <DemoBlock title="Flex布局">
        <Row>
          <Col span={6}>span: 6</Col>
          <Col span={6}>span: 6</Col>
          <Col span={6}>span: 6</Col>
        </Row>
        <Row justify="center">
          <Col span={6}>span: 6</Col>
          <Col span={6}>span: 6</Col>
          <Col span={6}>span: 6</Col>
        </Row>
        <Row justify="end">
          <Col span={6}>span: 6</Col>
          <Col span={6}>span: 6</Col>
          <Col span={6}>span: 6</Col>
        </Row>
        <Row justify="space-between">
          <Col span={6}>span: 6</Col>
          <Col span={6}>span: 6</Col>
          <Col span={6}>span: 6</Col>
        </Row>
        <Row justify="space-around">
          <Col span={6}>span: 6</Col>
          <Col span={6}>span: 6</Col>
          <Col span={6}>span: 6</Col>
        </Row>
      </DemoBlock>
    </div>
  );
};
