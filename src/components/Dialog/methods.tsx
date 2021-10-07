import type { ReactNode } from 'react';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Dialog from './Dialog';

type DialogFuncProps = {
  title?: ReactNode;
  content?: ReactNode;
  onCancel?: () => void;
  onOk?: () => void;
  cancelText?: string;
  okText?: string;
  afterClose?: () => void;
};

function isPromise(thing?: PromiseLike<any>): boolean {
  return !!(thing && !!thing.then);
}

const renderDialog = (config: DialogFuncProps, showCancel: boolean) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  let currentConfig = {
    onOk: () => {},
    onCancel: () => {},
    ...config,
    visible: true,
    confirmLoading: false,
  };

  function destroy() {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  function close() {
    currentConfig = {
      ...currentConfig,
      visible: false,
      afterClose: () => {
        if (typeof config.afterClose === 'function') {
          config.afterClose();
        }
        destroy();
      },
    };
    render();
  }

  function handlePromiseOnOk(value?: PromiseLike<any>) {
    currentConfig.confirmLoading = true;
    render();
    value?.then(
      () => {
        currentConfig.confirmLoading = false;
        close();
      },
      () => {
        currentConfig.confirmLoading = false;
        close();
      }
    );
  }

  function render() {
    ReactDOM.render(
      <Dialog
        {...currentConfig}
        onCancel={
          showCancel
            ? () => {
                currentConfig.onCancel();
                close();
              }
            : undefined
        }
        onOk={() => {
          let returnValue: any;
          // eslint-disable-next-line prefer-const
          returnValue = currentConfig.onOk();
          if (!returnValue) {
            close();
            return;
          }
          if (!isPromise(returnValue)) {
            close();
            return;
          }
          handlePromiseOnOk(returnValue);
        }}
      />,
      div
    );
  }

  render();
};

const alert = (config: DialogFuncProps) => {
  return renderDialog(config, false);
};

const confirm = (config: DialogFuncProps) => {
  return renderDialog(config, true);
};

export { alert, confirm };
