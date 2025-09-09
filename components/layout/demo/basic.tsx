import React from 'react';
import { Cells, Col, Row } from 'react-weui';

export default () => {
  return (
    <div id="demos-flex-box">
      <Cells title="基础用法" className="p-4">
        <Row>
          <Col span={24}>col</Col>
        </Row>
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
        <Row>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
        </Row>
        <Row>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>
      </Cells>

      <Cells title="区块间隔" className="p-4">
        <Row gutter={[16, 24]}>
          <Col span={6} className="!m-0">
            col-6
          </Col>
          <Col span={6} className="!m-0">
            col-6
          </Col>
          <Col span={6} className="!m-0">
            col-6
          </Col>
          <Col span={6} className="!m-0">
            col-6
          </Col>
          <Col span={6} className="!m-0">
            col-6
          </Col>
          <Col span={6} className="!m-0">
            col-6
          </Col>
          <Col span={6} className="!m-0">
            col-6
          </Col>
          <Col span={6} className="!m-0">
            col-6
          </Col>
        </Row>
      </Cells>

      <Cells title="左右偏移" className="p-4">
        <Row>
          <Col span={8}>col-8</Col>
          <Col span={8} offset={8}>
            col-8
          </Col>
        </Row>
        <Row>
          <Col span={6} offset={6}>
            col-offset-6
          </Col>
          <Col span={6} offset={6}>
            col-offset-6
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>
            col-12 col-offset-6
          </Col>
        </Row>
      </Cells>
    </div>
  );
};
