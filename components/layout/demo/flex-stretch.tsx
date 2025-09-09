import React from 'react';
import { Cells, Col, Row } from 'react-weui';

export default () => {
  return (
    <div id="demos-flex-box" style={{ padding: '40px 0' }}>
      <Cells title="Percentage columns" className="p-4">
        <Row>
          <Col flex={2}>2 / 5</Col>
          <Col flex={3}>3 / 5</Col>
        </Row>
      </Cells>
      <Cells title="Fill rest" className="p-4">
        <Row>
          <Col flex="100px">100px</Col>
          <Col flex="auto">Fill Rest</Col>
        </Row>
      </Cells>
      <Cells title="Raw flex style" className="p-4">
        <Row>
          <Col flex="1 1 200px">1 1 200px</Col>
          <Col flex="0 1 300px">0 1 300px</Col>
        </Row>
        <Row wrap={false}>
          <Col flex="none">
            <div style={{ padding: '0 16px' }}>none</div>
          </Col>
          <Col flex="auto">auto with no-wrap</Col>
        </Row>
      </Cells>
    </div>
  );
};
