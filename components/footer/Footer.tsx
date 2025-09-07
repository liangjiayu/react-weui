import classNames from 'classnames';
import React, { type HtmlHTMLAttributes, useMemo } from 'react';

interface FooterProps extends HtmlHTMLAttributes<HTMLDivElement> {
  links?: FooterLinkProps[];
  text?: React.ReactNode;
  bottom?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

interface FooterLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = (props) => {
  const { links = [], text, children, style, className, bottom, ...restProps } = props;

  const classes = classNames(
    'weui-footer',
    {
      'weui-footer_fixed-bottom': bottom,
    },
    className,
  );

  // ============================ Render ============================
  const linksNode = useMemo(() => {
    if (links.length === 0) return null;
    return (
      <div className="weui-footer__links">
        {links.map((link, index) => (
          <a {...link} key={index} className="weui-footer__link weui-wa-hotarea">
            {link.children}
          </a>
        ))}
      </div>
    );
  }, [links]);

  return (
    <div {...restProps} className={classes} style={style}>
      {linksNode}
      {text && <div className="weui-footer__text">{text}</div>}
      {children}
    </div>
  );
};

if (process.env.NODE_ENV !== 'production') {
  Footer.displayName = 'Footer';
}

export default Footer;
