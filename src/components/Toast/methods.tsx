import React from 'react';
import ReactDOM from 'react-dom';
import InternalToast, { ToastProps } from './Toast';

function toast(config: ToastProps) {
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
    ReactDOM.render(<InternalToast {...others} onClose={_onClose} />, div);
  }

  render();

  return {
    clear: _onClose,
  };
}

type ConfigOptions = {
  duration?: number;
  content?: React.ReactNode;
  onClose?: () => void;
  maskVisible?: boolean;
};

const ToastApi = {
  success: (options: string | ConfigOptions) => {
    const props = typeof options === 'string' ? { content: options } : options;
    return toast({ ...props, icon: 'success' });
  },
  warn: (options: string | ConfigOptions) => {
    const props = typeof options === 'string' ? { content: options } : options;
    return toast({ ...props, icon: 'warn' });
  },
  loading: (options: string | ConfigOptions) => {
    const props = typeof options === 'string' ? { content: options } : options;
    return toast({ ...props, icon: 'loading' });
  },
  text: (options: string | ConfigOptions) => {
    const props = typeof options === 'string' ? { content: options } : options;
    return toast({ ...props });
  },
};

export default ToastApi;
