import React from 'react';
import { Footer } from 'react-weui';

export default () => {
  return (
    <div
      style={{
        backgroundColor: 'var(--weui-BG-0)',
        minHeight: '100vh',
      }}
    >
      <div className="page__hd">
        <div className="page__title">Footer</div>
        <div className="page__desc">页脚</div>
      </div>

      <Footer text="Copyright © 2008-2022 weui.io" />
      <br />
      <br />
      <Footer
        text="Copyright © 2008-2022 weui.io"
        links={[{ children: '底部链接', href: 'https://www.baidu.com', target: '_blank' }]}
      />
      <br />
      <br />
      <Footer
        text="Copyright © 2008-2022 weui.io"
        links={[{ children: '底部链接' }, { children: '底部链接' }]}
      />

      <Footer text="Copyright © 2008-2022 weui.io" links={[{ children: 'WeUI首页' }]} bottom>
        <a href="//beian.miit.gov.cn/">备案号：粤B2-20090059</a>
      </Footer>
    </div>
  );
};
