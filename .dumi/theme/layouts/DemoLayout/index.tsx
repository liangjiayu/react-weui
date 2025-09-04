import { useOutlet } from 'dumi';
import React, { useRef } from 'react';
import './DemoLayout.less';

export const ROUTE_MSG_TYPE = 'dumi:update-iframe-route';

const DemoLayout: React.FC = ({}) => {
  const target = useRef<HTMLDivElement>(null);
  const outlet = useOutlet();

  return (
    <div
      className="dumi-mobile-demo-layout"
      ref={target}
      data-html2sketch-container
    >
      {outlet}
    </div>
  );
};

export default DemoLayout;
