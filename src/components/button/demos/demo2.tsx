import React from 'react';
import { Button } from 'react-weui';

export default () => {
  return (
    <div
      style={{
        overflow: 'hidden',
        backgroundColor: 'var(--weui-BG-2)',
        height: '100vh',
      }}
    >
      <div className="weui-bottom-fixed-opr-page">
        <div className="weui-bottom-fixed-opr-page__content">
          <div className="p-20">
            Dolor tempora dolore aperiam fuga necessitatibus? Odio atque tempora
            deleniti voluptates voluptatem. Dolorem earum voluptas blanditiis
            labore quisquam? Quibusdam nesciunt consequatur aliquam ea corrupti
            animi, itaque consequatur neque? At porroSit nemo aliquid quas error
            doloremque Reiciendis ratione repellendus quae sit commodi amet
            architecto? Aut officiis aliquam fugit nulla at necessitatibus Optio
            totam quibusdam laboriosam aperiam libero! Officiis reiciendis Elit
            quaerat sed vero perferendis architecto consequatur. Consequuntur ad
            illum dolore ut accusamus. Cum possimus odit sequi quaerat beatae,
            eveniet. Rerum dolore ipsam quia consectetur iste Veniam mollitia
            dolores tempore? Dolor tempora dolore aperiam fuga necessitatibus?
            Odio atque tempora deleniti voluptates voluptatem. Dolorem earum
            voluptas blanditiis labore quisquam? Quibusdam nesciunt consequatur
            aliquam ea corrupti animi, itaque consequatur neque? At porroSit
            nemo aliquid quas error doloremque Reiciendis ratione repellendus
            quae sit commodi amet architecto? Aut officiis aliquam fugit nulla
            at necessitatibus Optio totam quibusdam laboriosam aperiam libero!
            Officiis reiciendis Elit quaerat sed vero perferendis architecto
            consequatur. Consequuntur ad illum dolore ut accusamus. Cum possimus
            odit sequi quaerat beatae, eveniet. Rerum dolore ipsam quia
            consectetur iste Veniam mollitia dolores tempore?
          </div>
        </div>
        <div className="weui-bottom-fixed-opr">
          <Button type="primary">阅读并同意</Button>
          <Button>取消</Button>
        </div>
      </div>
    </div>
  );
};
