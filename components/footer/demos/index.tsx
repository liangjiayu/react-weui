import React from 'react';
import { Footer } from 'react-weui';

export default () => {
  return (
    <div style={{ paddingTop: 50 }}>
      <Footer text="Copyright © 2008-2022 weui.io" />
      <br />
      <br />

      <Footer
        links={
          <>
            <a href="javascript:" className="weui-footer__link weui-wa-hotarea">
              底部链接
            </a>
          </>
        }
        text="Copyright © 2008-2022 weui.io"
      />
      <br />
      <br />

      <Footer
        links={
          <>
            <a href="javascript:" className="weui-footer__link weui-wa-hotarea">
              底部链接
            </a>
            <a href="javascript:" className="weui-footer__link weui-wa-hotarea">
              底部链接
            </a>
          </>
        }
        text="Copyright © 2008-2022 weui.io"
      />

      <Footer
        links={
          <>
            <a href="javascript:" className="weui-footer__link weui-wa-hotarea">
              底部链接
            </a>
            <a href="javascript:" className="weui-footer__link weui-wa-hotarea">
              底部链接
            </a>
          </>
        }
        text="Copyright © 2008-2022 weui.io"
        bottom
      >
        <a href="//beian.miit.gov.cn/">备案号：粤B2-20090059</a>
      </Footer>
    </div>
  );
};
