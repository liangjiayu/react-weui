import React from 'react';
import { Cells, Col, Row } from 'react-weui';

export default () => {
  return (
    <div id="demos-flex-box">
      <Cells title="start" className="p-4">
        <Row justify="start">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>
      </Cells>
      <Cells title="center" className="p-4">
        <Row justify="center">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>
      </Cells>
      <Cells title="end" className="p-4">
        <Row justify="end">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>
      </Cells>
      <Cells title="space-between" className="p-4">
        <Row justify="space-between">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>
      </Cells>
      <Cells title="space-around" className="p-4">
        <Row justify="space-around">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>
      </Cells>
    </div>
  );
};
