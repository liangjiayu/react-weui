import React from 'react';
import { Cells, Col, Row } from 'react-weui';

const DemoBox: React.FC<React.PropsWithChildren<{ value: number }>> = (props) => (
  <p style={{ lineHeight: `${props.value}px` }}>{props.children}</p>
);

export default () => {
  return (
    <div id="demos-flex-box">
      <Cells title="Align Top" className="p-4">
        <Row justify="center" align="top">
          <Col span={4}>
            <DemoBox value={100}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={50}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={120}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={80}>col-4</DemoBox>
          </Col>
        </Row>
      </Cells>

      <Cells title="Align Center" className="p-4">
        <Row justify="space-around" align="center">
          <Col span={4}>
            <DemoBox value={100}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={50}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={120}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={80}>col-4</DemoBox>
          </Col>
        </Row>
      </Cells>

      <Cells title="Align Bottom" className="p-4">
        <Row justify="space-between" align="bottom">
          <Col span={4}>
            <DemoBox value={100}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={50}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={120}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={80}>col-4</DemoBox>
          </Col>
        </Row>
      </Cells>
    </div>
  );
};
