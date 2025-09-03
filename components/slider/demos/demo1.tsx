import React from 'react';
import { Slider } from 'react-weui';

export default () => {
  return (
    <div
      style={{
        overflow: 'hidden',
        backgroundColor: 'var(--weui-BG-0)',
        minHeight: '100vh',
      }}
    >
      <div className="p-40">
        <div className="text-20">Slider</div>
        <div className="text-14">滑块</div>
      </div>
      <div className="p-15">
        <div className="text-14 mb-5 mt-10 color-666">基础用法</div>
        <Slider />
      </div>
      <div className="p-15">
        <div className="text-14 mb-5 mt-10 color-666">步长</div>
        <Slider
          step={10}
          max={500}
          min={0}
          showValue
          onAfterChange={(val) => {
            console.log('onAfterChange', val);
          }}
        />
      </div>
    </div>
  );
};
