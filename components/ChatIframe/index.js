import { css } from 'styled-components';
import useDarkMode from 'use-dark-mode';

const ChatIframe = ({ radioId }) => {
  const darkMode = useDarkMode();

  const IframeStyle = css`
    width: 480px;
    height: 100%;

    @media (max-width: 615px) {
      height: 500px;
    }
  `;

  return (
    <iframe
      title="youtube__chat"
      css={IframeStyle}
      src={`https://youtube.com/live_chat?v=${radioId}&embed_domain=${
        process.env.BASE_URL
      }&dark_theme=${darkMode.value ? 1 : 0}`}
      frameBorder="0"
    ></iframe>
  );
};

export default ChatIframe;
