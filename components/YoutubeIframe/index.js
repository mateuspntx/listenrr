import PropTypes from 'prop-types';
import { css } from 'styled-components';

const YoutubeIframe = ({ showPlayer, radioId }) => {
  const IframeStyle = css`
    width: ${showPlayer ? '480px' : '0'};
    height: ${showPlayer ? '600px' : '0'};
    visibility: ${showPlayer ? 'none' : 'visible'};
    padding-right: 1rem;

    @media (max-width: 615px) {
      padding-right: 0;
      width: 100%;
      height: 220px;
    }
  `;
  return (
    <>
      <iframe
        key={radioId}
        id="youtube__iframe"
        title="youtube__iframe"
        type="text/html"
        frameBorder="0"
        css={IframeStyle}
        allow="autoplay"
      ></iframe>
    </>
  );
};

YoutubeIframe.propTypes = {
  showPlayer: PropTypes.bool.isRequired,
  radioId: PropTypes.string.isRequired,
};

export default YoutubeIframe;
