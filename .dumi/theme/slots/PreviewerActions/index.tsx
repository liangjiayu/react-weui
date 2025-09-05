import { useRouteMeta } from 'dumi';
import PreviewerActions from 'dumi/theme-default/slots/PreviewerActions';
import QRCode from 'qrcode.react';
import React, {
  type ComponentProps,
  type FC,
  useEffect,
  useState,
} from 'react';
import './index.less';

type IPreviewerActionsProps = ComponentProps<typeof PreviewerActions> & {
  qrCodeUrl?: string;
};

const MobilePreviewerActions: FC<IPreviewerActionsProps> = (props) => {
  const {
    frontmatter: { mobile = true },
  } = useRouteMeta();
  const [qrCodeUrl, setQrCodeUrl] = useState(props.qrCodeUrl || '');
  const extra = (
    <>
      {mobile && props.demoUrl && (
        <button
          className="dumi-default-previewer-action-btn dumi-mobile-previewer-action-qrcode"
          type="button"
          title={qrCodeUrl}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <title>qr-code</title>
            <path d="M2 2h2v2H2z" />
            <path d="M6 0v6H0V0zM5 1H1v4h4zM4 12H2v2h2z" />
            <path d="M6 10v6H0v-6zm-5 1v4h4v-4zm11-9h2v2h-2z" />
            <path d="M10 0v6h6V0zm5 1v4h-4V1zM8 1V0h1v2H8v2H7V1zm0 5V4h1v2zM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8zm0 0v1H2V8H1v1H0V7h3v1zm10 1h-1V7h1zm-1 0h-1v2h2v-1h-1zm-4 0h2v1h-1v1h-1zm2 3v-1h-1v1h-1v1H9v1h3v-2zm0 0h3v1h-2v1h-1zm-4-1v1h1v-2H7v1z" />
            <path d="M7 12h1v3h4v1H7zm9 2v2h-3v-1h2v-1z" />
          </svg>
          <QRCode value={qrCodeUrl} size={96} />
        </button>
      )}
    </>
  );

  useEffect(() => {
    // for adapt ssr
    setQrCodeUrl(props.qrCodeUrl || `${location.origin}${props.demoUrl}`);
  }, [props.demoUrl, props.qrCodeUrl]);

  return (
    <PreviewerActions
      {...props}
      extra={
        <>
          {extra}
          {props.extra}
        </>
      }
      demoContainer={
        props.iframe === false
          ? // use mobile device iframe as demo container when original iframe is false
            (props.demoContainer?.querySelector('iframe') as HTMLIFrameElement)
          : props.demoContainer
      }
    />
  );
};

export default MobilePreviewerActions;
