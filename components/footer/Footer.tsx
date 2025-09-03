import React from 'react';
import classNames from 'classnames';

type FooterProps = {
  links?: React.ReactNode;
  text?: React.ReactNode;
  bottom?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const Footer: React.FC<FooterProps> = (props) => {
  const { links, text, children, style, className, bottom } = props;

  const classes = classNames(
    'weui-footer',
    {
      [`weui-footer_fixed-bottom`]: bottom,
    },
    className
  );

  return (
    <div className={classes} style={style}>
      {links && <div className="weui-footer__links">{links}</div>}
      {text && <div className="weui-footer__text">{text}</div>}
      {children}
    </div>
  );
};

export default Footer;
