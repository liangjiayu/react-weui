import React from 'react';
import ReactDOM from 'react-dom';
import type { TopTipsProps } from './TopTips';
import InternalTopTips from './TopTips';

const toptips = (config: TopTipsProps) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const { onClose = () => {}, ...others } = config;

  function destroy() {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  function _onClose() {
    onClose();
    destroy();
  }

  function render() {
    ReactDOM.render(<InternalTopTips {...others} onClose={_onClose} />, div);
  }

  render();

  return {
    clear: _onClose,
  };
};

const ToptipsApi = {
  open: (options: TopTipsProps) => {
    return toptips(options);
  },
};

export default ToptipsApi;
