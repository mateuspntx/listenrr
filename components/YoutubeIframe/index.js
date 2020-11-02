const YoutubeIframe = ({ width, height }) => {
  const style = {
    visibility: width > 1 ? 'none' : 'visible',
    paddingRight: '1rem'
  };
  return (
    <>
      <iframe
        id="youtube__iframe"
        title="youtube__iframe"
        type="text/html"
        width={width}
        height={height}
        frameBorder="0"
        style={style}
      ></iframe>
    </>
  );
};

export default YoutubeIframe;
